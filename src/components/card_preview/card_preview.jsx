import React from "react";
import Card from "../card/card";
import styles from "./card_preview.module.css";
const Card_preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Card card={cards[key]} key={key} />
      ))}
    </ul>
  </section>
);

export default Card_preview;
