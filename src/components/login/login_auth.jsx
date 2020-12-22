import React from "react";
import styles from "./login_auth.module.css";
const Login_auth = ({ authService }) => {
  const onLogin = (event) => {
    console.log(event.currentTarget.textContent);
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
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

export default Login_auth;
