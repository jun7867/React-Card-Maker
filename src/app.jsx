import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
function App({ FileInput, authService }) {
  return (
    <section className={styles.all}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}></Login>
          </Route>

          <Route path="/home">
            <Home FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
