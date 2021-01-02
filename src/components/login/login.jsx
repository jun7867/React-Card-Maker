import React from "react";
import LoginHeader from "../header/login_header";
import styles from "./login.module.css";
import LoginAuth from "./login_auth";

const Login = ({ authService }) => {
  return (
    <>
      <section className={styles.all}>
        <div className={styles.template}>
          <LoginHeader />
          <LoginAuth authService={authService} />
        </div>
      </section>
    </>
  );
};

export default Login;
