import React from "react";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./card_maker.module.css";
const Card_maker = ({ cards }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      {cards.map((card) => (
        <CardEditForm card={card} key={card.id} />
      ))}
    </section>
  );
};

export default Card_maker;
