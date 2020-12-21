import React from "react";
import Login_header from "../header/login_header";
import styles from "./login.module.css";
import Login_auth from "./login_auth";

const Login = ({ authService }) => {
  return (
    <>
      <section className={styles.all}>
        <div className={styles.template}>
          <Login_header />
          <Login_auth authService={authService} />
        </div>
      </section>
    </>
  );
};

export default Login;
