import React, { Component , useEffect } from "react";
import PropTypes from "prop-types";
import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav, ProgressBar,Card, ListGroup, Carousel, Modal } from 'react-bootstrap';
import "./StudentPortal.css";
import YoutubeEmbed from "./YoutubeEmbed";
import {   MdLocalMovies} from "react-icons/md";
import {  ImLink, ImArrowRight2} from "react-icons/im";
import {   IoMdSchool} from "react-icons/io";
import Progress from "./ProgressBar";
import News from "./News";
import Agenda from "./Agenda";
import Favourite from "./Favourite";
import Ads from "./Adverts";
import Adds from "./Additional";
import { IoNewspaperOutline  } from "react-icons/io5";
import { MdStars  } from "react-icons/md";
import { ImLibrary, ImProfile  } from "react-icons/im";
import { BsChatSquareTextFill, BsCalendar3  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";

const now = 80;



class StudentPortalForm extends Component  {
    
    constructor (){
        super ();
        this.state = {
            show: false
        };
    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal(this);
    }
    showModal = () => {
        this.setState ({show:true});
    };
    hideModal = () => {
        this.setState ({show:false});

    }

     render() {
         return (

              <Container fluid className= "Parent">
                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Student Advisor</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{}}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
                  {/* Axios */}
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
                                                    
                                                    <Card.Body>
                                                        <Card.Title>Welcome Kekeletso Phasha</Card.Title>
                                                        
                                                        <Card.Text>
                                                        You do not have any messages.
                                                        <hr />
                                                        </Card.Text>
                                                            2021 Enrollement is now open.<br />
                                                        <Button variant="danger" 
                                                        // href= "/ReturningStudentWelcome" target="_blank" rel="noopener noreferre"
                                                        onClick={this.ShowModal}
                                                        
                                                        >Enrollment
                                                        
                                                        </Button>
                                                    </Card.Body>
                                             </Card>
                                        </Col>
                                        <Col>
                                         <Card style={{ width: '18rem' }}>
                        <Card.Header className= "header"  > 
                             <MdStars /> Most used 
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href= "/chats" target="_blank" rel="noopener noreferre" >
                               <BsChatSquareTextFill /> Chats
                                
                            </ListGroup.Item>
                          {/* href= "/ReturningStudentWelcome" target="_blank" rel="noopener noreferre"  */}
                            <ListGroup.Item action href="#/keke2">
                               <MdEmail /> Email
                                
                            </ListGroup.Item>
                            <ListGroup.Item action href="#/keke3">
                               <BsCalendar3 /> Calendar
                                
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => this.ShowModal} >
                               <ImProfile /> Student Advisor

                           
                            </ListGroup.Item>
                            <ListGroup.Item action href="https://pearson.primo.exlibrisgroup.com/discovery/account?vid=27PIOHE_INST:27PIOHE_INST&section=overview&lang=en" target="_blank" rel="noopener noreferre">
                               <ImLibrary /> Libary
                                
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                                            {/* <Favourite /> */}
                                        </Col>
                                        <Row>
                                            <Col>
                                             <br />
                                               <h3> <MdLocalMovies />
                                                 Now Playing </h3>
                                            <YoutubeEmbed embedId="S_e66j1NFMo" />
                                            <a href="/#" target="_blank" rel="noopener noreferre"> More Videos like this <ImArrowRight2 /> </a>
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

                                <Col className= "Section" xs="auto" > 
                                    <Row>
                                        <Col>
                                            <Card style={{ width: '18rem' }}>
                                                        <Card.Header className= "header"> <IoMdSchool/> My Module</Card.Header>
                                                        <ListGroup variant="flush">
                                                            <ListGroup.Item action href="https://mylmsft.institution.africa/login/index.php" target="_blank" rel="noopener noreferre">
                                                             Computer Science
                                                               <mdStars/> 
                                                            </ListGroup.Item>
                                                      </ ListGroup>
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
                                        <Col className= "adblock">
                                        
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

StudentPortalForm.propTypes = {
    advisor: PropTypes.bool
}


export default StudentPortalForm;