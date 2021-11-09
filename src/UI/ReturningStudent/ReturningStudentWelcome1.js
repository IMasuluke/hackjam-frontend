import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NextButton from "./NextButton";
import CancelButton from "./CancelButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReturningStudent.css";
import "./ReturningStudentBar.css";
import CountryDropDown from "../../Components/CountryDropDown/CountryDropDown";

{
  /* All information in forms should autofill dynamically. With unique user information */
}

class ReturningStudentWelcome1 extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />

          {/* ReturningStudentBar */}

          <div className="BarDiv">
            <div>
              <label className="BarDivTextReturningStudent">
                <h2 className="h2Size">Returning Student</h2>
              </label>
              <label className="BarDivTextStep">
                <h2 className="h2Size">Step 1 of 4</h2>
              </label>
            </div>
            <br />

            {/* Consider wrapping in div */}
            <label className="HrBar">
              <hr className="hrBarLight" />
            </label>
            <label className="HrBar">
              <hr />
            </label>
            <label className="HrBar">
              <hr />
            </label>
            <label className="HrBar">
              <hr />
            </label>
            {/* Consider wrapping in div */}
          </div>
          <br />
          {/* ReturningStudentBar */}
        </div>
        <h1 className="h1">Update Personal Information</h1>
        <div className="leftDiv">
          <form className="ReturningStudentForm">
            <div>
              <ul className="ReturningStudentList">
                <li>
                  First Name:
                  <input
                    className="areturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />
                <br />
                <li>
                  Surname:
                  <input
                    className="breturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />
                <br />
                <li>
                  Preferred Name:
                  <input
                    className="creturningStudentWelcomeInputBox"
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
                    className="dreturningStudentWelcomeInputBox"
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
                    className="ereturningStudentWelcomeInputBox"
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

        <div className="rightDiv">
          <form className="ReturningStudentForm">
            <br />
            <div>
              <ul className="ReturningStudentList">
                <li>State/Province:</li>
                <br />
                <br />
                <li className="item">
                  Postal Code:
                  <input
                    className="freturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />
                <br />
                <li>
                  Email Address:
                  <input
                    className="greturningStudentWelcomeInputBox"
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
                    className="hreturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />
                <br />
              </ul>
              <label className="navButtons">
                <a
                  variant="danger"
                  href="/ReturningStudentWelcome3"
                  rel="noopener noreferre"
                >
                  <button className="NextButtonReturningStudent1">Next</button>
                </a>
              </label>
              <label className="navButtons">
                <a
                  variant="danger"
                  href="/ReturningStudentWelcome"
                  rel="noopener noreferre"
                >
                  <button className="CancelButtonReturningStudent1">
                    Cancel
                  </button>
                </a>
              </label>
            </div>
          </form>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome1;
