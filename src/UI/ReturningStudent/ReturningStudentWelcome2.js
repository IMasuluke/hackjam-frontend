import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";
import CountryDropDown from "../../Components/CountryDropDown/CountryDropDown";
import NextButton from "./NextButton";
import CancelButton from "./CancelButton";

class ReturningStudentWelcome2 extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <ReturningStudentBar />
          <div className="leftDiv">
            <form className="ReturningStudentForm">
              <h1 className="h1">Sponsor Details</h1>
              <br />
              <div>
                <ul className="ReturningStudentList">
                  <li>
                    First Name:
                    <input
                      className="Left"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Surname:
                    <input
                      className=" Left"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Address Line 1:
                    <input
                      className=" Left"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Address Line 2:
                    <input
                      className=" Left"
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
                      className=" Left"
                      type="text"
                      // value={username}
                      // onChange={this.handleUsernameChange}
                    />
                  </li>
                  <br />

                  <li>
                    Surname:
                    <input
                      className=" Left"
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

          <span>
            <div className="rightDiv">
              <form className="ReturningStudentForm">
                <h1 className="H1Blank">Blank</h1>
                <br />
                <div>
                  <ul className="ReturningStudentList">
                    <li>State/Province: (Drop Down Pending)</li>
                    <br />

                    <li>
                      Postal Code:
                      <input
                        className="returningStudentWelcomeInputBox Right"
                        type="text"
                        // value={username}
                        // onChange={this.handleUsernameChange}
                      />
                    </li>
                    <br />

                    <li>
                      Email Address:
                      <input
                        className="returningStudentWelcomeInputBox Right"
                        type="text"
                        // value={username}
                        // onChange={this.handleUsernameChange}
                      />
                    </li>

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
                        className="returningStudentWelcomeInputBox Right"
                        type="text"
                        // value={username}
                        // onChange={this.handleUsernameChange}
                      />
                    </li>
                    <br />

                    <li>
                      Phone Number:
                      <input
                        className="returningStudentWelcomeInputBox Right"
                        type="text"
                        // value={username}
                        // onChange={this.handleUsernameChange}
                      />
                    </li>
                    <br />
                    <br />
                  </ul>
                </div>
              </form>
            </div>
          </span>
        </div>
        <div className="ReturningStudentWelcome2Buttons">
          <label>
            <NextButton />
            <CancelButton />
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
