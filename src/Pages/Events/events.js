import React, { Component } from "react";

import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup, Navbar, Nav } from 'react-bootstrap';
import { IoNewspaperOutline  } from "react-icons/io5";
import Logo from "../../Images/Logos/Logo(Motto).png";
import Career from "../../Images/Adverts/VirtualCareerAd.PNG";



class EventsForm extends Component {
   

     render() {
         return (
                    <Container fluid >
                      <Row> 
                          <Col>
                                <Navbar bg="dark" variant="dark">
                                    <Container>
                                    <Navbar.Brand href="#home">
                                        <img
                                            src= {Logo}
                                             
                                            height="80"
                                            className="Image2"
                                            alt="Eduvos Logo"
                                          
                                        />
                                    </Navbar.Brand>
                                    <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                    </Nav>
                                    </Container>
                                </Navbar>
                               
                                
                            </Col>
                        </Row>

                         <Container fluid>
                             <Row>
                                 <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Career}
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
                                src="holder.js/800x400?text=Second slide&bg=282c34"
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
                                src="holder.js/800x400?text=Third slide&bg=20232a"
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
                        </Container>
                        
                    </Container>

                   

                );
     }
}
export default EventsForm;