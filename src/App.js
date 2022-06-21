import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import logo from "./img/logo.svg";
// eslint-disable-next-line
import "./App.css";
import home from "./pages/Home";
import faq from "./pages/faq";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/faq" exact component={faq} />
        <Route component={NotFound} />
        <Route path="faq" exact component={faq} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
