// Login Logout 담당
import firebase from "firebase";
import firebaseApp from "./firebase";
class AuthService {
  // providerName에 들어오는 값에 따라 로그인이 달라짐 (구글,깃허브..)
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  redirect() {}
  logout() {
    firebaseApp.auth().signOut();
  }
  // 사용자가 바뀌면 = 업데이트되면 (login or logout)
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
