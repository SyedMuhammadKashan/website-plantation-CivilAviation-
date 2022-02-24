import React, { Component } from "react";
import fire from "./config/fire";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
          <div className="container">
            <div className="navbar-brand">Navbar</div>
            <ul className="nav justify-content-end">
             <li className="nav-item">
                <Link to="/">Menu</Link>
              </li> 
            <li className="nav-item">
              
              </li>
              <li className="nav-item">
                <Link to="benefits">Benefits</Link>
              </li>
              <li className="nav-item">
                <Link to="Ourresponsibility">OurResponsibility</Link>
              </li>
              <li className="nav-item">
                <Link to="Mypost">MyPost</Link>
              </li>
            </ul>
            <Button variant="primary" onClick={this.logout}>
              Logout
            </Button>
          </div>
        </nav>
      </div>
    );
  }
}
export default Menu;
