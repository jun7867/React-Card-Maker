import React from "react";
import styles from "./login_header.module.css";
const Login_header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.upper}>
          <img src="./favicon.ico" className={styles.favicon}></img>
          <button className={styles.button}>logout</button>
        </div>
        <div className={styles.down}>
          <p className={styles.header_title}>Business Card Maker</p>
        </div>
      </header>
    </>
  );
};

export default Login_header;
