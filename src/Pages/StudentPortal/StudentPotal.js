import React, { Component } from "react";

import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav, ProgressBar,Card, ListGroup, Carousel } from 'react-bootstrap';
import "./StudentPortal.css";
import YoutubeEmbed from "./YoutubeEmbed";
import {   MdLocalMovies} from "react-icons/md";
import {  ImLink} from "react-icons/im";
import {   IoMdSchool} from "react-icons/io";
import Progress from "./ProgressBar";
import News from "./News";
import Agenda from "./Agenda";
import Favourite from "./Favourite";
import Ads from "./Adverts";
import Adds from "./Additional";

const now = 80;
 

class StudentPortalForm extends Component {
    

     render() {
         return (
              <Container fluid className= "ParentCont">
                  
                 <Header/> <br />
                        <Container fluid className= "PorgressBar">
                            <Row>
                                
                                <Col  className= "Progress"> 
                                My Progress: <ProgressBar className= "bar" now={now} label={`${now}%` } />

                                </Col>
                            </Row>
                        </Container>

                        <Container className= "Structre" fluid>
                            <Row> 
                                <Col xs={9}>
                                    <Row>
                                        <Col>
                                            <Card>
                                                    <Card.Header >
                                                        <Nav variant="tabs" defaultActiveKey="#first">
                                                        <Nav.Item>
                                                            <Nav.Link href="#first">Active</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link href="#link">Link</Nav.Link>
                                                        </Nav.Item>
                                                        
                                                        </Nav>
                                                    </Card.Header >
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
                                         
                                            <Favourite />
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
                                         <Row>
                                              
                                            <Col>
                                            <br />
                                               <Adds />                                             
                                                
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>

                                <Col className= "Section"> 
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                        <Card.Header className= "header"> <IoMdSchool/> My Module</Card.Header>
                                                        <ListGroup variant="flush">
                                                            <ListGroup.Item href="#/keke1">
                                                             Computer Science

                                                            </ListGroup.Item>
                                                        </ListGroup>
                                                        <Card.Body><mdStars/></Card.Body> 
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr/>
                                     <Row>
                                        <Col>
                                            <Agenda />
                                        </Col>
                                    </Row>
                                        <hr/>
                                    <Row>
                                        <Col>
                                        
                                          <Ads />  
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                 <Card.Header className= "header"> < ImLink /> Quick Links</Card.Header>
                                                <Card.Body>
                                                  
                                                    <Card.Link href="#">New Student Orientation </ Card.Link> <br />
                                                    <Card.Link href="#" >2021 Year Calendar</ Card.Link> <br />
                                                    <Card.Link href="#"> Graduation</ Card.Link> <br />
                                                    
                                                   
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                        <hr className= "divider"/>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}> 
                                            <Card.Header className= "header"> Emotional Health</Card.Header>
                                                <Card.Body>
                                                    
                                                    <Card.Title>Eduvous Student Crisis Line</Card.Title>
                                                    
                                                    <Card.Text>
                                                    Support fot students experiencing emotional and psychological distess. The
                                                    Toll free line is managed by professionals and is avaiable 24/7/365.
                                                    Call: 0800 111 3131.
                                                    You can also contact the counselling and Career Development Unit.
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
                 <Footer/> 
            </Container>
            
         );
     }
}
export default StudentPortalForm;