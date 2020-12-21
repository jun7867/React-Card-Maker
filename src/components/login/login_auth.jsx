import React from "react";
import styles from "./login_auth.module.css";
const Login_auth = (props) => {
  return (
    <>
      <div className={styles.auth}>
        <p className={styles.title}>Login</p>
        <div className={styles.button}>
          <button className={styles.google}>Google</button>
          <button className={styles.github}>Github</button>
        </div>
      </div>
    </>
  );
};

export default Login_auth;
