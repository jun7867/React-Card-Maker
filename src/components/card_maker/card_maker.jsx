import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./card_maker.module.css";
const Card_maker = ({ cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          onDelete={deleteCard}
        />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Card_maker;
