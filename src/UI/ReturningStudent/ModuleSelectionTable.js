import React, { useState } from "react";
import "./Table.css";
import data from "./Mock-data(ModuleSelection).json";
import TotalPriceOfModules from "./CostTotal";

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
                <td>R {details.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <label className="costTotal"> */}
      <table>
        <tbody>
          <tr>
            <td className="courseFeeData">
              <h2 className="courseFeeText">Course Fee</h2>
            </td>

            <td className="costTotalSum">
              <TotalPriceOfModules />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModuleSelectionTable;
