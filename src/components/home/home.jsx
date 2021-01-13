import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router";
import Header from "../header/login_header";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
const Home = ({ FileInput, authService }) => {
  //key : 1 ,2 , 3.....
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
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

  const createOrUpdateCard = (card) => {
    //map을 사용하면 효율이 안좋다.
    // => 배열형식에서 -> object =>  key,value 사용

    //component state 업데이트를 하면 업데이트 하는 시점에 state가 동기적으로 할 수 없을 경우가 있다.
    //=> setCards 안에서 실행
    // setCards를 부를때의 그 시점에서 상태를 업데이트.
    // card.id가 없으면 새로 생성
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.home}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <CardPreview cards={cards} />
      </div>
    </section>
  );
};

export default Home;
