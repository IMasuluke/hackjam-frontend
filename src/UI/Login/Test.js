// import React, { Component } from "react";
// import Logo from "./Logo.png";
// import LoginCampus3 from "./LoginCampus3.jpg";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// class TestForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//     };
//   }

//   handleUsernameChange = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({
//       password: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     alert(
//       `Your username is ${this.state.username} and your password is ${this.state.password}`
//     );
//   };

//   render() {
//     const { username, password } = this.state;
//     return (
//       // // <Container className="container">
//       // <Container>
//       //   <Row>
//       //     <Col>1 of 1</Col>
//       //     <Col>1 of 1</Col>
//       //   </Row>
//       // </Container>
//       // // </Container>
//       <div className="parentDiv">
//         <div className="image">
//           <img className="loginCampus3" src={LoginCampus3} alt="campus_image" />
//         </div>
//         <div className="form">
//           <form onSubmit={this.handleSubmit}>
//             <div className="loginBox">
//               <img className="logo" src={Logo} alt="logo" />
//               <h3>Sign in</h3>
//               <hr />
//               <div>
//                 <label>Username</label>
//                 <br />
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={this.handleUsernameChange}
//                 />
//               </div>
//               <br />
//               <div>
//                 <label>Password</label>
//                 <br />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={this.handlePasswordChange}
//                 />
//               </div>
//               <br />
//               <br />
//               <input type="checkbox" />
//               <span>Remember username</span>
//               <br />
//               <br />
//               <p>
//                 <a
//                   className="forgottenPassword"
//                   href="https://mylmsft.institution.africa/login/forgot_password.php"
//                   style={{ color: "black" }}
//                   target="_blank"
//                 >
//                   Forgotten your Username or Password?
//                 </a>
//               </p>
//               <p>Testing</p>
//               <button type="submit" className="buttonLogin">
//                 Log in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default TestForm;
