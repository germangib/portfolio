import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage"; 
import PortfolioPage from "./pages/PortfolioPage";
import "./App.css";


function App() {
  
    return (
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} /> 
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="*" component={LandingPage} />
          </Switch> 
          <Footer />
      </Router>
    );
  }

export default App;
