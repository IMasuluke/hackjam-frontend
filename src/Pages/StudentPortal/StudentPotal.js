import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Nav,
  ProgressBar,
  Card,
  ListGroup,
  Carousel,
  Modal,
  Form,
} from "react-bootstrap";
import "./StudentPortal.css";
import YoutubeEmbed from "./YoutubeEmbed";
import { MdLocalMovies } from "react-icons/md";
import { ImLink, ImArrowRight2 } from "react-icons/im";
import { IoMdSchool } from "react-icons/io";
import Progress from "./ProgressBar";
import News from "./News";
import Agenda from "./Agenda";
import Favourite from "./Favourite";
import Ads from "./Adverts";
import Adds from "./Additional";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";
import { ImLibrary, ImProfile } from "react-icons/im";
import { BsChatSquareTextFill, BsCalendar3 } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const now = 80;

class StudentPortalForm extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };

    axios({
      method: "POST",
      url: "http://localhost:8081/hackjam-studenthub/mono-api/api/getUserbyStudentNumber",
      headers: {
        uiKey: "HackJam",
        apisessionkey: "token",
      },
      data: {
        studentNr: "8h76ttg55",
      },
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("error in request", err);
      });

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container fluid className="Parent">
        <Header /> <br />
        <Container fluid className="PorgressBar">
          <Row>
            <Col className="Progress">
              My Progress:{" "}
              <ProgressBar className="bar" now={now} label={`${now}%`} />
            </Col>
          </Row>
        </Container>
        <Container className="Structre" fluid>
          <Modal
            show={this.state.show}
            onHide={this.hideModal}
            centered
            size="lg"
          >
            <Modal.Header closeButton className="header">
              <Modal.Title>Student Advisor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label>Name:</Form.Label>
                      <Col>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="Kekeletso"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label>Surname</Form.Label>
                      <Col>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="Phasha"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label>Email:</Form.Label>
                      <Col>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="email@example.com"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label>WhatsApp Number:</Form.Label>
                      <Col>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="067 785 5462"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label>Office Number:</Form.Label>
                      <Col>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue="011 499 8339"
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
                <Col>image</Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="header">
              <Button variant="secondary" onClick={this.hideModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Row>
            <Col xs={9}>
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Welcome Kekeletso Phasha</Card.Title>
                      <Card.Text>
                        You do not have any messages.
                        <hr />
                      </Card.Text>
                      2021 Enrollement is now open.
                      <br />
                      <Button
                        variant="danger"
                        href="/ReturningStudentWelcome"
                        target="_blank"
                        rel="noopener noreferre"
                      >
                        Enrollment
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Card className="module">
                        <Card.Header className="header">
                          Submission Deadlines
                        </Card.Header>
                        <ListGroup>
                          Colour |Date |Data Structures
                          {/* < div className= "box">
                                                                    keke
                                                                </div> */}
                        </ListGroup>
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <Card.Header className="header">
                          <MdStars /> Important Apps
                        </Card.Header>
                        <ListGroup variant="flush">
                          <ListGroup.Item
                            action
                            href="/chats"
                            target="_blank"
                            rel="noopener noreferre"
                          >
                            <BsChatSquareTextFill /> Chats
                          </ListGroup.Item>

                          <ListGroup.Item
                            action
                            href="https://outlook.office.com/mail/inbox"
                            target="_blank"
                            rel="noopener noreferre"
                          >
                            <MdEmail /> Outlook Emails
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            href="https://teams.microsoft.com/"
                            target="_blank"
                            rel="noopener noreferre"
                          >
                            <BsCalendar3 /> Teams Calendar
                          </ListGroup.Item>
                          <ListGroup.Item action onClick={this.showModal}>
                            <ImProfile /> Student Advisor
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            href="https://pearson.primo.exlibrisgroup.com/discovery/account?vid=27PIOHE_INST:27PIOHE_INST&section=overview&lang=en"
                            target="_blank"
                            rel="noopener noreferre"
                          >
                            <ImLibrary /> Libary
                          </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Row>
                  <Col>
                    <br />
                    <h4>
                      {" "}
                      <MdLocalMovies />
                      Now Playing{" "}
                    </h4>
                    <YoutubeEmbed embedId="S_e66j1NFMo" />
                    <a href="/#" target="_blank" rel="noopener noreferre">
                      {" "}
                      More Videos like this <ImArrowRight2 />{" "}
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <br />

                    <News />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <br />
                    <Adds />
                  </Col>
                </Row>
              </Row>
            </Col>

            <Col className="Section" xs="auto">
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Header className="header">
                      {" "}
                      <IoMdSchool /> My Course
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item
                        action
                        href="https://mylmsft.institution.africa/login/index.php"
                        target="_blank"
                        rel="noopener noreferre"
                      >
                        Computer Science
                        <mdStars />
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <hr className="sideline" />
              <Row>
                <Col>
                  <Agenda />
                </Col>
              </Row>
              <hr className="sideline" />
              <Row>
                <Col className="adblock">
                  <Ads />
                </Col>
              </Row>
              <hr className="sideline" />
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Header className="header">
                      {" "}
                      <ImLink /> Quick Links
                    </Card.Header>
                    <Card.Body>
                      <Card.Link href="#">New Student Orientation </Card.Link>{" "}
                      <br />
                      <Card.Link href="#">2021 Year Calendar</Card.Link> <br />
                      <Card.Link href="#"> Graduation</Card.Link> <br />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <hr style={{ size: "4px" }} />
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Header className="header">
                      {" "}
                      Emotional Health
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Eduvous Student Crisis Line</Card.Title>

                      <Card.Text className="emotional">
                        Support fot students experiencing emotional and
                        psychological distess. The Toll free line is managed by
                        professionals and is avaiable 24/7/365. Call: 0800 111
                        3131. You can also contact the counselling and Career
                        Development Unit.
                      </Card.Text>

                      <Card.Link href="#">Counselling</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br />
        <Footer />
      </Container>
    );
  }
}

StudentPortalForm.propTypes = {
  advisor: PropTypes.bool,
};

export default StudentPortalForm;
