import React, { Component , useEffect, useState } from "react";
import { Button,Container,Row, Col, Image, Nav,CardGroup, Card,FloatingLabel, ListGroup, Modal,Form, Offcanvas } from 'react-bootstrap';
import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header";
import Logo from "../../Images/Logos/Logo(Motto).png";
import midrand from "../../UI/Login/LoginCampus2.jpg";

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
                           
                            

                            <Offcanvas show={true} onHide={false}>
        <Offcanvas.Header >
          <Offcanvas.Title><Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                
                            </Form>
                            <hr/>
                            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <Card body>  Microsoft Office</Card>
            <Card body>  Microsoft Office</Card>
            <Card body>  Microsoft Office</Card>
            <Card body>  Microsoft Office</Card>
        </Offcanvas.Body>
      </Offcanvas>

                            </Col>
                            
                       </Row>
                       
                     </Col>
                     <Col>
                        <Row className= "community">
                            <h3>Community</h3>
                                                                                <CardGroup>
                                                    <Card>

                                                        <Card.Img variant="top" src={midrand} />
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
                        <Row className="messagearea">
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