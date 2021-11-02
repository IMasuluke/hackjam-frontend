import React, { Component } from "react";
import DynamicCourseTitle from "./DynamicCourseTitle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ReturningStudentBar from "../ReturningStudentBar/ReturningStudentBar";
import "./ReturningStudent.css";
import NextButton from "./NextButton";
import PastModulesTable from "./PastModulesTable";
import EnrollingModulesTable from "./EnrollingModulesTable";

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
        <div className="ReturningStudentDiv">
          <h3 className="h3">Course History</h3>
          <label className="qualificationNameLabel">
            <p className="qualificationName">Qualification Name</p>
          </label>
          <label className="dynamicH1Label">
            <h1 className="dynamicH1">
              <DynamicCourseTitle />
            </h1>
          </label>
          <br />
          <br />
          <PastModulesTable />
          <br />
          <br />
          <EnrollingModulesTable />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="buttonsDiv">
            <label>
              <button type="submit" className="arrowButton">
                ←
              </button>
            </label>
            <label>
              <button type="submit" className="nextButton">
                Next
              </button>
            </label>
            <label>
              <button type="submit" className="cancelButton">
                Cancel
              </button>
            </label>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ReturningStudentWelcome3;
