import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReturningStudent.css";
import "./ReturningStudentBar.css";
import ModuleSelectionTable from "./ModuleSelectionTable";

{
  /* All information in forms should autofill dynamically. With unique user information. Current data is being dynamically rendered
  from Mock-data(ModuleSelection).json */
}

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
            <label className="HrBar">
              <hr className="hrBarHeavy" />
            </label>
            <label className="HrBar">
              <hr className="hrBarHeavy" />
            </label>
            <label className="HrBar">
              <hr className="hrBarHeavy" />
            </label>
            <label className="HrBar">
              <hr className="hrBarLight" />
            </label>
          </div>

          <h1 className="h1">Accept and Submit</h1>
          <br />
          <h1 className="h1">Review and submit module selections</h1>
          <br />

          <ModuleSelectionTable />

          <br />
          <br />
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
              <a
                variant="danger"
                href="/ReturningStudentWelcome3"
                rel="noopener noreferre"
              >
                <button type="submit" className="backButton">
                  Back
                </button>
              </a>
            </label>
            <label>
              <a
                variant="danger"
                href="/ReturningStudentWelcome"
                rel="noopener noreferre"
              >
                <button type="submit" className="cancelButton">
                  Cancel
                </button>
              </a>
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
