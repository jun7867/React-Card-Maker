import React from "react";
import Login_header from "./login_header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <>
      <div className={styles.all}>
        <div className={styles.template}>
          <Login_header></Login_header>
        </div>
      </div>
    </>
  );
};

export default Login;
