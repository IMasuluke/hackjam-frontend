import React, { useState } from "react";
import data from "./Mock-data(PastModulesTable).json";

const PastModulesTable = () => {
  const [contacts, setContacts] = useState(data);

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
                <td>{details.Grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastModulesTable;
