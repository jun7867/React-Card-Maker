import React, { useCallback, useEffect, useState } from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router";
import Header from "../header/login_header";
import CardMaker from "../card_maker/card_maker";
import CardPreview from "../card_preview/card_preview";
const Home = ({ FileInput, authService, cardRepository }) => {
  // login component를 통해서 왔다면 값을 가지고 있다. => userId 초기값으로 사용
  const historyState = useHistory.state;
  //key : 1 ,2 , 3.....
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  // memo를 사용해도 Home이 변경이 될때마다 onLogout이 계속 만들어진다. => useCallback 사용
  // props,state가 변경이 되면 다시 호출이 된다. => authService가 변할때만 조건 넣어주기
  // 10.25
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  // 사용자 Id 변경시마다
  useEffect(() => {
    if (!userId) {
      return;
    }
    //stopSync는 syncCards에서 return된 값이다. (ref.off)
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    //unMount시 자동 호출 (불필요한 네트워크 사용 )
    return () => stopSync();
  }, [userId, cardRepository]);

  //login - logout
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);

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
    // firebase update
    cardRepository.saveCard(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    // firebase update
    cardRepository.removeCard(userId, card);
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
