import React, { Component } from "react";
import Logo from "./Logo.png";
import LoginCampus3 from "./LoginCampus3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

class LogInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `Your username is ${this.state.username} and your password is ${this.state.password}`
    );
  };

  render() {
    const { username, password } = this.state;
    return (
      // // <Container className="container">
      // <Container>
      //   <Row>
      //     <Col>1 of 1</Col>
      //     <Col>1 of 1</Col>
      //   </Row>
      // </Container>
      // // </Container>
      <div className="parentDiv">
        <div>
          <img className="loginCampus3" src={LoginCampus3} alt="campus_image" />
        </div>
        <div className="loginForm">
          <form onSubmit={this.handleSubmit}>
            <br />
            <div className="loginBox">
              <img className="logo" src={Logo} alt="logo" />
              <hr className="loginHr" />
              <h3 className="h3SignIn">Sign in</h3>
              <div>
                <label className="inputHeaders">Username</label>
                <br />
                <input
                  className="inputBox"
                  type="text"
                  value={username}
                  onChange={this.handleUsernameChange}
                />
              </div>
              <br />
              <input type="checkbox" className="checkBox" />
              <span>
                <p className="checkBoxText">Remember Me</p>
              </span>
              <div>
                <label className="inputHeaders">Password</label>
                <br />
                <input
                  className="inputBox"
                  type="password"
                  value={password}
                  onChange={this.handlePasswordChange}
                />
              </div>

              <br />
              <br />
              <p>
                <a
                  className="forgottenPassword"
                  href="https://mylmsft.institution.africa/login/forgot_password.php"
                  target="_blank"
                >
                  Forgotten your Username or Password?
                </a>
              </p>
              <p className="loginP">
                By clicking "Log in", I agree to the Terms of Use and have read
                the Privacy Notice
              </p>

              <button className="buttonLogin" type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LogInForm;
