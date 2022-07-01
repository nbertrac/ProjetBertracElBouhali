import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Css (à faire)
//import "../css/style.css";

//Loader
import HomeLoader from "../components/loader/homeloader";
import FaqLoader from "../components/loader/faqloader";
import DetailsLoader from "../components/loader/detailsloader";

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
        <Suspense fallback={<FaqLoader />}>
          <Route path="/faq" component={Faq} />
        </Suspense>
        <Suspense fallback={<DetailsLoader />}>
          <Route path="/details" component={Details} />
        </Suspense>
        <Route path="*" component={Lost} />
      </Switch>
    </LayoutNav>
  </Router>
);

export default Routeur;
