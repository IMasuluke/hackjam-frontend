import React, { useState } from "react";
import data from "./Mock-data(ModuleSelection).json";

const TotalPriceOfModules = () => {
  const [contacts] = useState(data);

  let costArray = () => {
    let sumArray = 0;
    contacts.map((details) => {
      sumArray = sumArray + details.cost;
    });

    return sumArray;
  };

  return (
    <>
      <p>R {costArray()}</p>
    </>
  );
};

export default TotalPriceOfModules;
