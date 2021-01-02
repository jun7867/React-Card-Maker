import React, { useEffect } from "react";
import styles from "./login_auth.module.css";
import { useHistory } from "react-router";

const LoginAuth = ({ authService }) => {
  const history = useHistory();

  const goToHome = (userId) => {
    history.push({
      pathname: "/home",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToHome(data.user.uid));
  };

  useEffect(() => {
    // component 업데이트시 (자동 로그인- 유저가 이미 있다면)
    authService.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });

  return (
    <>
      <div className={styles.auth}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.ul}>
          <li>
            <button className={styles.authButton} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.authButton} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LoginAuth;
