import { firebaseDatabase } from "./firebase";

class CardRepository {
  // 계속 파이어베이스 데이터 받아와서 호출
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value); // value는 cards임.
    });
    // 더이상 on을 하기 싫을 때 off로 종료
    return () => ref.off();
  }
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
