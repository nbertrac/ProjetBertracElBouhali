import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css
import "../css/style.css";

//Layout
import LayoutNav from "../layout/layoutNav";

// 404
import Lost from "./404";

//Pages
import Home from "../pages/home";
import Faq from "../pages/faq";
import Details from "../pages/details";

const Routeur = () => (
  <Router>
    <LayoutNav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/faq" component={Faq} />
        <Route path="/details:id" component={Details} />
        <Route path="*" component={Lost} />
      </Switch>
    </LayoutNav>
  </Router>
);

export default Routeur;
