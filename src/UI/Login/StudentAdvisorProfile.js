import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// class StudentAdvisorProfile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       surname: "",
//       email: "",
//       whatsappNumber: "",
//       officeNumber: "",
//     };
//   }

//   handleUsernameChange = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };
// }

const StudentAdvisorProfile = () => {
  return (
    <div>
      <div>
        <h1 className="SAPH1">Student Advisor</h1>
        <ul className="SAPList">
          <li>Name:</li>
          <br />
          <li>Surname:</li>
          <br />
          <li>Email:</li>
          <br />
          <li>WhatsApp Number:</li>
          <br />
          <li>Office Number:</li>
        </ul>
      </div>
      <div>{/* <img>className="logo" src={Logo} alt="logo"</img> */}</div>
    </div>
  );
};

export default StudentAdvisorProfile;
