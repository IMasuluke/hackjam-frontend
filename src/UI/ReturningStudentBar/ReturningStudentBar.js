import { render } from "@testing-library/react";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./ReturningStudentBar.css";

const ReturningStudentBar = () => {
  render();
  {
    return (
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
        <label className="HrBar">
          <ProgressBar value={7} maxRange={10} />
        </label>
        <label className="HrBar">
          <ProgressBar value={7} maxRange={10} />
        </label>
        <label className="HrBar">
          <ProgressBar value={7} maxRange={10} />
        </label>
        <label className="HrBar">
          <ProgressBar value={7} maxRange={10} />
        </label>
      </div>
    );
  }
};

export default ReturningStudentBar;
