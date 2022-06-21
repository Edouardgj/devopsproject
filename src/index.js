import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// eslint-disable-next-line
import logo from "./img/logo.svg";
// eslint-disable-next-line
import "./App.css";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Toys from "./pages/Toys";
import NotFound from "./pages/NotFound";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Toys">Toys</Link>
            </li>
            <li>
              <Link to="/Faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path="/Faq">
          {" "}
          <Faq />{" "}
        </Route>
        <Route exact path="/Toys">
          {" "}
          <Toys />{" "}
        </Route>
        <Route exact path="/*">
          {" "}
          <NotFound />{" "}
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
