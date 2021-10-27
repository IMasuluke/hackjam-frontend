import React, { useState } from "react";
import "./Table.css";
import data from "./Mock-data(ModuleSelection).json";

const ModuleSelectionTable = () => {
  const [contacts, setContacts] = useState(data);

  return (
    <div>
      <div className="ReturningStudentDiv4">
        <table className="modulesCol">
          <thead>
            <tr className="headerText">
              <th>Modules</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((details) => (
              <tr>
                <td>{details.module}</td>
                <td>{details.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="costTotalDiv">
        <label>
          <h2 className="courseFeeText">Course Fee</h2>
        </label>
        <input className="costTotal" type="text"></input>
      </div>
    </div>
  );
};

export default ModuleSelectionTable;
