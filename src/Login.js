import React, { Component } from "react";
import fire from "./config/fire";
import "./LoginStyle.css";
import logo from "./pictures/logo.jpg";


class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  login(e) {
    e.preventDefault();
    alert("Please Sign In First");
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div className="main">
        <form className="myform col-md-4 col-lg-4 col-xl-4">
          <img src={logo} alt="" className="user" img-fluid />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="enter email address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <input
            name="password"
            required
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="enter password"
            value={this.state.password}
          />
          <br />
          <button id="btn1" onClick={this.login}>
            Login
          </button>
          <br />
          <button id="btn2" onClick={this.signup}>
            Signup
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
