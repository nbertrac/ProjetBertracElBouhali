import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css (à faire)
//import "../css/style.css";

//Loader (à modifier)
import HomeLoader from "../components/loader/homeloader";

//Layout (à modifier)
import LayoutNav from "../layout/layoutNav";

// 404 (a modifier)
import Lost from "./404";

//Pages (à modifier)
const Home = React.lazy(() => import("../pages/home"));
const Faq = React.lazy(() => import("../pages/faq"));
const Details = React.lazy(() => import("../pages/details"));

const Routeur = () => (
  <Router>
    <LayoutNav>
      <Switch>
        <Suspense fallback={<HomeLoader />}>
          <Route exact path="/" component={Home} />
        </Suspense>
        <Route path="/faq" component={Faq} />
        <Route path="/details" component={Details} />
        <Route path="*" component={Lost} />
      </Switch>
    </LayoutNav>
  </Router>
);

export default Routeur;
