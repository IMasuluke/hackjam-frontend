import React, { Component } from "react";

import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav, ProgressBar,Card, ListGroup, Carousel } from 'react-bootstrap';
import "./StudentPortal.css";
import YoutubeEmbed from "./YoutubeEmbed";
import {   MdLocalMovies, mdStars} from "react-icons/md";
import Progress from "./ProgressBar";
import Campus from "../../Images/EduvosLogo(Blue).png";
import News from "./News";
import Agenda from "./Agenda";


const now = 80;
 

class StudentPortalForm extends Component {
    

     render() {
         return (
              <Container fluid className= "ParentCont">
                  
                 <Header/> <br />
                        <Container fluid className= "PorgressBar">
                            <Row>
                                <Col>
                                    Test
                                </Col>
                                <Col>
                                Button
                                </Col>
                                <Col  className= "Progress"> 
                                My Progress: <ProgressBar now={now} label={`${now}%` } />

                                </Col>
                            </Row>
                        </Container>

                        <Container className= "Structre" fluid>
                            <Row> 
                                <Col xs={9}>
                                    <Row>
                                        <Col>
                                            <Card>
                                                    <Card.Header>
                                                        <Nav variant="tabs" defaultActiveKey="#first">
                                                        <Nav.Item>
                                                            <Nav.Link href="#first">Active</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link href="#link">Link</Nav.Link>
                                                        </Nav.Item>
                                                        
                                                        </Nav>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>Welcome Kekeletso Phasha</Card.Title>
                                                        
                                                        <Card.Text>
                                                        You do not have any messages.
                                                        <hr />
                                                        </Card.Text>
                                                            2021 Enrollement is now open.<br />
                                                        <Button variant="danger">Enrollment</Button>
                                                    </Card.Body>
                                             </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Header> <mdStars/> Most used</Card.Header>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Libary</ListGroup.Item>
                                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                        </Col>
                                        <Row>
                                            <Col>
                                             <br />
                                               <h3> <MdLocalMovies />
                                                 Now Playing </h3>
                                            <YoutubeEmbed embedId="S_e66j1NFMo" />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <br />
                                                
                                                <News />
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>

                                <Col> 
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                        <Card.Header> <mdStars/> My Module</Card.Header>
                                                        <Card.Title href="#">Computer Science </Card.Title>
                                                        <Card.Body><mdStars/></Card.Body> 
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr/>
                                     <Row>
                                        <Col>Task Bar
                                            <Agenda />
                                        </Col>
                                    </Row>
                                        <hr/>
                                    <Row>
                                        <Col>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                    className="d-block w-100"
                                                    src={Campus}
                                                    alt="First slide"
                                                    />
                                                    <Carousel.Caption>
                                                    <h3>First slide label</h3>
                                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                    className="d-block w-100"
                                                    src={Campus}
                                                    alt="Second slide"
                                                    />

                                                    <Carousel.Caption>
                                                    <h3>Second slide label</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                    className="d-block w-100"
                                                    src={Campus}
                                                    alt="Third slide"
                                                    />

                                                    <Carousel.Caption>
                                                    <h3>Third slide label</h3>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </Col>
                                    </Row>
                                        <hr/>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title>Eduvous Student Crisis Line</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                                    <Card.Text>
                                                    Support fot students experiencing.
                                                    </Card.Text>
                                                    <Card.Link href="#">Card Link</Card.Link>
                                                    <Card.Link href="#">Another Link</Card.Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                               
                            </Row>
                        </Container>
                  
                        <br />
                 <Footer/> 
            </Container>
            
         );
     }
}
export default StudentPortalForm;