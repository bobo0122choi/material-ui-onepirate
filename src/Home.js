import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import Privacy from "./Privacy";
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ByuMISM from "./ByuMISM";
import Model from "./Model";
import NFTArtist from "./NFTArtist";
import Engineer from "./Engineer";
import Singer from "./Singer";
import FoodCritic from "./FoodCritic";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/byumism">
          <ByuMISM />
        </Route>
        <Route path="/model">
          <Model />
        </Route>
        <Route path="/nftartist">
          <NFTArtist />
        </Route>
        <Route path="/engineer">
          <Engineer />
        </Route>
        <Route path="/singer">
          <Singer />
        </Route>
        <Route path="/foodcritic">
          <FoodCritic />
        </Route>
      </Switch>
    </Router>
  );
}

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
