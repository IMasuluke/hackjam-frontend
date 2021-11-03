import React, { Component } from "react";

import { Button,Container,Row, Col,Card, Form, Accordion, ProgressBar } from 'react-bootstrap';
import Header from "../../Components/StudentPortal/Header/Header"
import Footer from "../../Components/StudentPortal/Footer/Footer";
const now = 60;

const Finance = () => {
    return (  
         <Container  fluid className= "Parent">
                    <Header />
                
                    <Container fluid>
                    <Row>
                    <Col>
                        <h1> Tuition Fees </h1>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '100%', highet: "100%" }}>
                                <Card.Body>
                                    <Card.Title>Total Amount Due:</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                    R <Form.Control  plaintext readOnly defaultValue="0.00" />

                                      <ProgressBar className= "bar" now={now} label={`${now}%` } />
                                </Card.Text>
                              
                                </Card.Body>
                            </Card>
                        
                        </Col>
                        <Col>
                            <Card style={{ width: '100%', }}>
                                    <Card.Body>
                                        <Card.Title>Make Payment:</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                        <Form.Control type="price" placeholder="R 0" />
                                        <br/>
                                                <Button variant="primary">EFT </Button>{' '}
                                                <Button variant="secondary" disabled>Pay with PayPal</Button>{'  '}
                                                <Button variant="secondary" disabled>Pay with Credit</Button>
                                                
                                                
                                        </Card.Text>
                                          
                                    </Card.Body>
                            </Card> 
                        </Col>
                    </Row>
                        <br/>
                        
                            <Row>
                            <Col>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Course info</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                
                            </Col>
                            
                           </Row>
                           <br/>
                    <Row>
                               
                        <Col >
                            <Card style={{ width: '50%' }}>
                                <Card.Body>
                                
                                    <Card.Text>
                                    If you have any questions please contact the finance Department for assistance.
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>
                        
                        </Col>
                        </Row>
                  
                    </Container>
                    <br/>
                 <Footer />

                </Container>


    );
}
 
export default Finance;

