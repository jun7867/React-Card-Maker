// Login Logout 담당
import firebase from "firebase";

class AuthService {
  // providerName에 들어오는 값에 따라 로그인이 달라짐 (구글,깃허브..)
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
