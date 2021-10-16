import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";
import CountryDropDown from "../../Components/CountryDropDown/CountryDropDown";

class ReturningStudentWelcome1 extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <ReturningStudentBar />
        </div>
        <div className="leftDiv">
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
                <li>
                  <CountryDropDown />
                </li>
              </ul>
            </div>
          </form>
        </div>

        {/* Break between forms */}
        <span>
          <div className="rightDiv">
            <form className="ReturningStudentForm">
              <h1>Update Personal Information</h1>
              <br />
              <div>
                <ul className="ReturningStudentList">
                  <li>State/Province:</li>
                  <br />
                  <br />
                  <li>Postal Code:</li>
                  <br />
                  <br />
                  <li>
                    Email Address:
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
                    Phone Number:
                    <input
                      className="returningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />
                  <br />
                </ul>
                <label>
                  <button type="submit" className="nextButton">
                    Next
                  </button>
                  <button type="submit" className="cancelButton">
                    Cancel
                  </button>
                </label>
              </div>
            </form>
          </div>
        </span>
        {/* Break between forms */}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome1;
