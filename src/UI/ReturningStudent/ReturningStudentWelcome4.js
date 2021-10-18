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
