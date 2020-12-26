import React from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router";
const Home = (props) => {
  const history = useHistory();
  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <button onClick={() => history.push("/")}> Go to profile</button>
    </div>
  );
};

export default Home;
