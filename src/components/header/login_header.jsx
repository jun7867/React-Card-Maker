import React, { memo } from "react";
import styles from "./login_header.module.css";
const LoginHeader = memo(({ onLogout }) => {
  return (
    <>
      <header className={styles.header}>
        <img src="./favicon.ico" alt="logo" className={styles.favicon}></img>
        {onLogout && (
          <button className={styles.logout} onClick={onLogout}>
            logout
          </button>
        )}
        <h1 className={styles.header_title}>Business Card Maker</h1>
      </header>
    </>
  );
});

export default LoginHeader;
