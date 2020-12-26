import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router";
import Header from "../header/login_header";
const Home = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    // logout function
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <div className={styles.Home}>
      <Header onLogout={onLogout} />
    </div>
  );
};

export default Home;
