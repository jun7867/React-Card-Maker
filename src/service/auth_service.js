// Login Logout 담당
import { firebaseAuth, githubProvider, googleProvider } from "./firebase";
class AuthService {
  // providerName에 들어오는 값에 따라 로그인이 달라짐 (구글,깃허브..)
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }
  redirect() {}
  logout() {
    firebaseAuth.signOut();
  }
  // 사용자가 바뀌면 = 업데이트되면 (login or logout)
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  // new firebase.auth[`${providerName}AuthProvider`]();
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
