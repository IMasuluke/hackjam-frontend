import React, { Component , useEffect, useState } from "react";
import { Button,Container,Row, Col, Image, Nav, ProgressBar,Card, ListGroup, Carousel, Modal, Navbar } from 'react-bootstrap';
import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header";
import Logo from "../../Images/Logos/Logo(Motto).png";

class chats extends Component  {
   
   

     render() {
         return (
             <Container fluid className= 'Parent'>
                 <Row>
                     <Col>
                             <Navbar bg="dark" variant="dark" sticky= "top">
                                    <Container fluid className= "nav">
                                    <Navbar.Brand href="#home">
                                        <img
                                            src= {Logo}
                                             
                                            height="80"
                                            className="Image2"
                                            alt="Eduvos Logo"
                                          
                                        />
                                    </Navbar.Brand>
                                    
                                    </Container>
                                </Navbar>
                     </Col>
                </ Row>
                 <Container fluid>
                 <Row>
                     <Col>
                       keke
                     </Col>
                 </Row>
                 </Container>
                 <Footer />
             </Container>
             );
     }
}


export default chats;