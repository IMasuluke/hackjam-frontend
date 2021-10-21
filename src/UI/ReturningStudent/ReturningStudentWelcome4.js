import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";

class ReturningStudentWelcome4 extends Component {
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
                <h2 className="h2Size">Step 4 of 4</h2>
              </label>
            </div>
            <br />
            <br />
            <label className="HrBar hrBarHeavy">
              <hr />
            </label>
            <label className="HrBar hrBarHeavy">
              <hr />
            </label>
            <label className="HrBar hrBarHeavy">
              <hr />
            </label>
            <label className="HrBar hrBarLight">
              <hr />
            </label>
          </div>

          <h1 className="h1">Accept and Submit</h1>
          <br />
          <h1 className="h1">Review and submit module selections</h1>

          <div className="ReturningStudentDiv4">
            <label>
              <h1 className="h1">Modules</h1>
            </label>
            <label className="costH1">
              <h1 className="h1">Cost</h1>
            </label>
          </div>

          <div className="submitDeclineDiv">
            <label>
              <button type="submit" className="submitButton">
                Submit
              </button>
            </label>
            <label>
              <button type="submit" className="declineButton">
                Decline
              </button>
            </label>
            <label>
              <button type="submit" className="backButton">
                Back
              </button>
            </label>
            <label>
              <h2 type="submit">Cancel</h2>
            </label>
          </div>
          {/* ReturningStudentBar */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome4;
