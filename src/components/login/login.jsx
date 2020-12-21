import React from "react";
import Login_header from "./login_header";
import styles from "./login.module.css";
import Login_auth from "./login_auth";

const Login = (props) => {
  return (
    <>
      <div className={styles.all}>
        <div className={styles.template}>
          <Login_header />
          <Login_auth />
        </div>
      </div>
    </>
  );
};

export default Login;
