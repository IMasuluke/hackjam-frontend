import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReturningStudent.css";
import "./ReturningStudentBar.css";
import CountryDropDown from "../../Components/CountryDropDown/CountryDropDown";
import NextButton from "./NextButton";
import CancelButton from "./CancelButton";

{
  /* All information in forms should autofill dynamically. With unique user information */
}

class ReturningStudentWelcome2 extends Component {
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
                <h2 className="h2Size">Step 2 of 4</h2>
              </label>
            </div>
            <br />
            <label className="HrBar">
              <hr className="hrBarHeavy" />
            </label>
            <label className="HrBar">
              <hr className="hrBarLight" />
            </label>
            <label className="HrBar">
              <hr />
            </label>
            <label className="HrBar">
              <hr />
            </label>
          </div>

          {/* ReturningStudentBar */}
          <h1 className="h1">Sponsor Details</h1>
          <div className="leftDiv">
            <form className="ReturningStudentForm">
              <br />
              <div>
                <ul className="ReturningStudentList">
                  <li>
                    First Name:
                    <input
                      className="jreturningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Surname:
                    <input
                      className="kreturningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Address Line 1:
                    <input
                      className="lreturningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Address Line 2:
                    <input
                      className="mreturningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    <CountryDropDown />
                  </li>
                  <br />
                  <br />
                  <h1 className="h1 secondH1">
                    Additional Contact Person / Next of Kin
                  </h1>
                  <br />
                  <li>
                    First Name:
                    <input
                      className="nreturningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Surname:
                    <input
                      className="oreturningStudentWelcomeInputBox"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                </ul>
              </div>
            </form>
          </div>
          {/* Break between forms */}

          <div className="rightDiv">
            <form className="ReturningStudentForm">
              <br />
              <ul className="ReturningStudentList">
                <li>
                  State/Province:
                  <input
                    className="preturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                  <li>
                    <CountryDropDown />
                  </li>
                </li>
                <br />

                <li>
                  Postal Code:
                  <input
                    className="qreturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />

                <li>
                  Email Address:
                  <input
                    className="rreturningStudentWelcomeInputBox"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />

                {/* Meant to be inline with first form */}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <li>
                  Email Address:
                  <input
                    className="sreturningStudentWelcomeInputBox Right"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />

                <li>
                  Phone Number:
                  <input
                    className="treturningStudentWelcomeInputBox Right"
                    type="text"
                    // value={username}
                    // onChange={this.handleUsernameChange}
                  />
                </li>
                <br />
                <br />
              </ul>
            </form>
          </div>
        </div>
        <div className="ReturningStudentWelcome2Buttons">
          <label>
            <a
              variant="danger"
              href="/ReturningStudentWelcome1"
              rel="noopener noreferre"
            >
              <button type="submit" className="arrowButton">
                ←
              </button>
            </a>
          </label>
          <label>
            <a
              variant="danger"
              href="/ReturningStudentWelcome3"
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
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome2;
