import React, { Component } from "react";
import Menu from "./Menu.js";
import Home from "./Home.js";
import Benefits from "./Benefits.js";
import Ourresponsibility from "./Ourresponsibility.js";
import Mypost from "./Mypost.js";
import Footer from"./Footer.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Website extends Component {
  render() {
    return (
        <div>
      <Router>
           <Menu /> 
           <Switch> 
          
            <Route path="/" exact  component={Home} />
            <Route path="/benefits" component={Benefits} />
            <Route path="/Ourresponsibility" component={Ourresponsibility} />
            <Route path="/Mypost" component={Mypost} />
           </Switch> 
            <Footer />
      </Router>
        </div>
    );
  }
}
export default Website;
