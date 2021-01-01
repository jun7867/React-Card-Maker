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
      company: "SSAFY",
      theme: "light",
      title: "Front-end Engineer",
      email: "jjune095@naver.com",
      message: "Free life",
      fileName: "jun",
      fileURL: "jun.png",
    },
    {
      id: 2,
      name: "JiYoung",
      company: "SSAFY",
      theme: "light",
      title: "Back-end Engineer",
      email: "jyoon@naver.com",
      message: "pang pang love",
      fileName: "jiyoung",
      fileURL: "jiyoung.png",
    },
    {
      id: 3,
      name: "Myeong",
      company: "Mobinity",
      theme: "light",
      title: "Android Engineer",
      email: "eqos2014@naver.com",
      message: "Android my life",
      fileName: "myeong",
      fileURL: "myeong.png",
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
  return (
    <section className={styles.home}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker cards={cards} />
        <CardPreview cards={cards} />
      </div>
    </section>
  );
};

export default Home;
