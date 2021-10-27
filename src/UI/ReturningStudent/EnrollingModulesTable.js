import React, { useState } from "react";
import data from "./Mock-data(EnrollingModulesTable).json";

const EnrollingModulesTable = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <div>
      <div className="ReturningStudentDiv4">
        <table className="modulesCol">
          <thead>
            <tr className="headerText">
              <th>Enrolling Modules</th>
              <th>Module Code</th>
              <th>Check</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((details) => (
              <tr>
                <td>{details.EnrollingModules}</td>
                <td>{details.ModuleCode}</td>
                <td>{details.Check}</td>
                <td>{details.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollingModulesTable;
