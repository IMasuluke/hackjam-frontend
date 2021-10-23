import React, { Component } from "react";

import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup, Navbar, Nav } from 'react-bootstrap';
import { IoNewspaperOutline  } from "react-icons/io5";
import Logo from "../../Images/Logos/Logo(Motto).png";
import Career from "../../Images/Adverts/VirtualCareerAd.PNG";
import Wellness from "../../Images/Events/studentwellness.jpg";
import "./event.css";
import Footer from "../../Components/StudentPortal/Footer/Footer";



class EventsForm extends Component {
   

     render() {
         return (
                    <Container fluid className="Parent">
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
                                    <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#features">Features</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                    </Nav>
                                    </Container>
                                </Navbar>
                               
                                
                            </Col>
                        </Row>

                         <Container fluid className= "slide">
                             <Row>
                                 <Col >
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="pic"
                                src={Career}
                                alt="First slide"
                                variant="top"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="pic"
                                src= {Wellness}
                                alt="Second slide"
                                variant="top"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="pic"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                                variant="top"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                            <br />
                             </Col>
                         </Row>
                         
                        </Container>   
                            
                        < Container className= "size">
                        
                           <Row xs={1} md={4} className="g-4">
                                {Array.from({ length: 8 }).map((_, idx) => (
                                    <Col>
                                    <Card
                                    //  bg="dark" variant="dark"text= 'white'
                                    >
                                        <Card.Img variant="top" src= {Career} />
                                        <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            10 Mins ago
                                        </Card.Footer>
                                    </Card>
                                    </Col>
                                ))}
                            </Row> 
                        

                        </Container>
                         <br />                            
                       <Footer/>  
                    </Container>

                   

                );
     }
}
export default EventsForm;