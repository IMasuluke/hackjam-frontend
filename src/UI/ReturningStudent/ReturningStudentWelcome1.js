import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";

class ReturningStudentWelcome1 extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <ReturningStudentBar />
        </div>
        <form className="ReturningStudentForm">
          <h1>Update Personal Information</h1>
          <br />
          <div>
            <ul className="ReturningStudentList">
              <li>First Name:</li>
              <br />
              <br />
              <li>Surname:</li>
              <br />
              <br />
              <li>
                Preferred Name:
                <input
                  className="returningStudentWelcomeInputBox"
                  type="text"
                  // value={username}
                  // onChange={this.handleUsernameChange}
                />
              </li>

              <br />
              <br />
              <li>
                Address Line 1:
                <input
                  className="returningStudentWelcomeInputBox"
                  type="text"
                  // value={username}
                  // onChange={this.handleUsernameChange}
                />
              </li>
              <br />
              <br />
              <li>
                Address Line 2:
                <input
                  className="returningStudentWelcomeInputBox"
                  type="text"
                  // value={username}
                  // onChange={this.handleUsernameChange}
                />
              </li>
              <br />
              <br />
              <li>Country:</li>
            </ul>
          </div>
        </form>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome1;
