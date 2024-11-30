import React from "react";
import LoginCampus1 from "./LoginCampus1.jpg";
import LoginCampus2 from "./LoginCampus2.jpg";
import LoginCampus3 from "./LoginCampus3.jpg";

const campus_image = `LoginCampus${Math.floor(Math.random() * 3) + 1}`;

const Campus = () => {
  return (
    <div className="loginCampus">
      <img src={campus_image} alt="campus_image" />
    </div>
  );
};

export default Campus;
