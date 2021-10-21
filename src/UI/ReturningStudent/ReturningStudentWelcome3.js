import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";

class ReturningStudentWelcome3 extends Component {
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
                <h2 className="h2Size">Step 3 of 4</h2>
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
            <label className="HrBar hrBarLight">
              <hr />
            </label>
            <label className="HrBar">
              <hr />
            </label>
          </div>
        </div>

        {/* ReturningStudentBar */}

        <h1 className="h1">Modules</h1>
        <form className="ReturningStudentForm">
          <h3 className="h3">Course History</h3>
          <p>Qualification Name</p>
          <h1>Bachelor of Science in Computer Science (dynamic)</h1>
          <br />
        </form>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome3;
