import React, { Component , useEffect, useState } from "react";
import { Button,Container,Row, Col, Image, Nav,CardGroup, Card,FloatingLabel, ListGroup, Modal,Form } from 'react-bootstrap';
import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header";
import Logo from "../../Images/Logos/Logo(Motto).png";

import "./Chats.css";

class chats extends Component  {
   
   

     render() {
         return (
             <Container fluid className= 'Parent'>
                
                             <Header/>
                    
                 <Container fluid className="sidebar">
                 <Row>
                     
                     <Col xs = {3}>
                       <Row>
                           <Col>
                           <br/>
                           <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <hr/>
                            </Col>
                            
                       </Row>
                       
                     </Col>
                     <Col>
                        <Row>
                            <h3>Community</h3>
                                                                                <CardGroup>
                                                    <Card>

                                                        <Card.Img variant="top" src={Logo} />
                                                        <Card.Body>
                                                        <Card.Title>Midrand</Card.Title>
                                                        
                                                        </Card.Body>
                                                        
                                                    </Card>
                                                    <Card>
                                                        <Card.Img variant="top" src={Logo}/>
                                                        <Card.Body>
                                                        <Card.Title>Computer Science</Card.Title>
                                                        
                                                        </Card.Body>
                                                        
                                                    </Card>
                                                    <Card>
                                                        <Card.Img variant="top" src={Logo} />
                                                        <Card.Body>
                                                        <Card.Title>Robotics Club</Card.Title>
                                                        
                                                        </Card.Body>
                                                        
                                                    </Card>
                                                    </CardGroup>
                                                    <br/>
                                                    
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <Row className="messagebox">
                                    Message
                                </Row>
                                <Row>
                                    <Col xs= {9}>
                                    <Form>
                                         <FloatingLabel controlId="type" >
                                            <Form.Control
                                            as="textarea"
                                            placeholder="Message"
                                           className="type" 
                                           col = {8}
                                            />
                                        </FloatingLabel>
                                    </Form>
                                    </Col>
                                    <Col xs="auto" className="my-1">
                                        <Button type="submit">Submit</Button>
                                        </Col>
                                   
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                     </Col>
                 </Row>
                  <br/>
                 </Container>

                 <Footer />
             </Container>
             );
     }
}


export default chats;