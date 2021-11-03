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
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";
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
            <br />

            {/* Consider wrapping in div */}
            <label className="HrBar hrBarLight">
              <hr />
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

          {/* ReturningStudentBar */}
        </div>
        <div className="leftDiv">
          <form className="ReturningStudentForm">
            <h1 className="h1">Update Personal Information</h1>
            <br />
            <div>
              <ul className="ReturningStudentList">
                <li>
                  First Name:
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
                  Surname:
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
              <h1 className="H1Blank">Blank</h1>
              <br />
              <div>
                <ul className="ReturningStudentList">
                  <li>State/Province:</li>
                  <br />
                  <br />
                  <li>
                    Postal Code:
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
                  <a
                    variant="danger"
                    href="/ReturningStudentWelcome2"
                    rel="noopener noreferre"
                  >
                    <NextButton />
                  </a>
                </label>
                <label>
                  <a
                    variant="danger"
                    href="/ReturningStudentWelcome"
                    rel="noopener noreferre"
                  >
                    <CancelButton />
                  </a>
                </label>
              </div>
            </form>
          </div>
        </span>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome1;
