import React, { useState } from "react";
import data from "./Mock-data(PastModulesTable).json";
import "./ReturningStudent.css";

const PastModulesTable = () => {
  const [contacts, setContacts] = useState(data);

  const importedData = (grade) => {
    let result = "";
    if (grade === "P") {
      result = "pass";
    } else if (grade === "P*") {
      result = "passWithDistinction";
    } else if (grade === "F") {
      result = "fail";
    }

    return <h1 className={result}>{grade}</h1>;
  };

  return (
    <div>
      <div className="ReturningStudentDiv4">
        <table className="modulesCol">
          <thead>
            <tr className="headerText">
              <th>Past Modules</th>
              <th>Module Code</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((details) => (
              <tr>
                <td>{details.PastModule}</td>
                <td>{details.ModuleCode}</td>
                <td>{importedData(details.Grade)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastModulesTable;
