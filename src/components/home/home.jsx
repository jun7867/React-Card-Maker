import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router";
import Header from "../header/login_header";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
const Home = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Jun",
      company: "Naver",
      theme: "dark",
      title: "Front-end Engineer",
      email: "jjune095@naver.com",
      message: "Free life",
      fileName: "jun",
      fileURL: null,
    },
    {
      id: 2,
      name: "JiYoung",
      company: "Samsung",
      theme: "light",
      title: "Back-end Engineer",
      email: "jyoon@naver.com",
      message: "pang pang love",
      fileName: "jiyoung",
      fileURL: null,
    },
    {
      id: 3,
      name: "Myeong",
      company: "Mobinity",
      theme: "colorful",
      title: "Android Engineer",
      email: "eqos2014@naver.com",
      message: "Android my life",
      fileName: "myeong",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    // logout function
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.home}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker cards={cards} addCard={addCard} />
        <CardPreview cards={cards} />
      </div>
    </section>
  );
};

export default Home;
