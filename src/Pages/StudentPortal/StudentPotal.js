import React, { Component } from "react";

import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav, ProgressBar,Card, ListGroup } from 'react-bootstrap';
import "./StudentPortal.css";
import YoutubeEmbed from "./YoutubeEmbed";
import {   MdLocalMovies, mdStars} from "react-icons/md";
import Progress from "./ProgressBar";


const now = 80;
 

class StudentPortalForm extends Component {
    

     render() {
         return (
              <Container fluid className= "ParentCont">
                  
                 <Header/> <br />
                        <Container fluid className= "PorgressBar">
                            <Row>
                                <Col  className= "Progress"> 
                                My Progress: <ProgressBar now={now} label={`${now}%` } />

                                </Col>
                            </Row>
                        </Container>

                        <Container className= "Structre" fluid>
                            <Row> 
                                <Col>
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
                                                        <Nav.Item>
                                                            <Nav.Link href="#disabled" disabled>
                                                            Disabled
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                        </Nav>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <Card.Title>Welcome Kekeletso Phasha</Card.Title>
                                                        
                                                        <Card.Text>
                                                        You do not have any messages.
                                                        <hr />
                                                        </Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
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
                                                <MdLocalMovies />
                                                <h1>Now Playing</h1>
                                            <YoutubeEmbed embedId="S_e66j1NFMo" />
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
                                        <Col>Task Bar</Col>
                                    </Row>
                                        <hr/>
                                    <Row>
                                        <Col>Advert</Col>
                                    </Row>
                                        <hr/>
                                    <Row>
                                        <Col>Pyscho</Col>
                                    </Row>
                                </Col>
                               
                            </Row>
                        </Container>
                    {/* <Container fluid>
                        <Row>
                            <Col>
                                <MdLocalMovies />
                                <h1>Now Playing</h1>
                            </Col>
                        </Row>
                         <Row>                   
                        <YoutubeEmbed embedId="S_e66j1NFMo" />
                        </ Row> 
                    </Container> <br /> */}
                        <br />
                 <Footer/> 
            </Container>

         );
     }
}
export default StudentPortalForm;