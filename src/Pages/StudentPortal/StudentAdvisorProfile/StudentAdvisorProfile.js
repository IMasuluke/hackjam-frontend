import React, { Component, useState, render, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentAdvisorProfile.css";

import {
  Button,
  Container,
  Modal,
  Row,
  Col,
  Image,
  Nav,
  Card,
  ListGroup,
  Carousel,
} from "react-bootstrap";

//class StudentAdvisorProfile extends Component {
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

// st StudentAdvisorProconfile = () => {
//   return (
//     // <div>

//     //   <div>
//     //     <h1 className="SAPH1">Student Advisor</h1>
//     //     <ul className="SAPList">
//     //       <li>Name:</li>
//     //       <br />
//     //       <li>Surname:</li>
//     //       <br />
//     //       <li>Email:</li>
//     //       <br />
//     //       <li>WhatsApp Number:</li>
//     //       <br />
//     //       <li>Office Number:</li>
//     //     </ul>
//     //   </div>
//     //   <div>{/* <img>className="logo" src={Logo} alt="logo"</img> */}</div>
//     // </div>
//     <Container>
//       <Row>

//       </Row>
//     </Container>
//   );
// };

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// render(<Example />);

//export default StudentAdvisorProfile;



// const Modal = ({ handleClose, show, children }) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button type="button" onClick={handleClose}>
//           Close
//         </button>
//       </section>
//     </div>
//     );
//   };