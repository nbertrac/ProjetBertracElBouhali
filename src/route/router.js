import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css (à faire)
//import "../css/style.css";

//Loader (à modifier)
import ThreeDots from "../components/loader/threedots";

//Layout (à modifier)
import LayoutNav from "../layout/layoutNav";

// 404 (a modifier)
import Lost from "./404";

//Pages (à modifier)
const Home = React.lazy(() => import("../pages/home"));
const Faq = React.lazy(() => import("../pages/faq"));
const Details = React.lazy(() => import("../pages/details"));

const Routeur = () => (
  <Suspense fallback={<ThreeDots />}>
    <Router>
      <LayoutNav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/details" component={Details} />
          <Route path="*" component={Lost} />
        </Switch>
      </LayoutNav>
    </Router>
  </Suspense>
);

export default Routeur;
