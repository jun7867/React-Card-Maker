import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router";
import Header from "../header/login_header";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
const Home = ({ authService }) => {
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
        <CardMaker />
        <CardPreview />
      </div>
      <div className={styles.cardPreview}></div>
    </section>
  );
};

export default Home;
