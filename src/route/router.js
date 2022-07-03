import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css (à faire)
import "../css/style.css";

//Layout (à modifier?)
import LayoutNav from "../layout/layoutNav";

// 404 (a modifier)
import Lost from "./404";

//Pages (à modifier)
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
