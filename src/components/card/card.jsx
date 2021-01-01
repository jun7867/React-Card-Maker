import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";
const Card = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const url = fileURL || DEFAULT_IMAGE; // url이 없을때 defualt
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt="card_image" className={styles.avatar} />
      <div className={styles.info}>
        <h1 className={styles.content1}>{name} </h1>
        <p className={`${styles.conpany} ${styles.content2}`}>{company}</p>
        <p className={styles.content2}>{title}</p>
        <p className={styles.content2}>{email}</p>
        <p className={styles.content2}>"{message}"</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}
export default Card;
