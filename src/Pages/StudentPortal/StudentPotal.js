import React, { Component } from "react";

import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav } from 'react-bootstrap';
import "./StudentPortal.css";
import YoutubeEmbed from "./YoutubeEmbed";
import {   MdLocalMovies} from "react-icons/md";

class StudentPortalForm extends Component {
     render() {
         return (
              <Container fluid className= "ParentCont">
                  
                 <Header/> <br />
                        <Container fluid className= "PorgressBar">
                            <Row>
                                <Col> 
                                <h2> My Progress </h2>
                                </Col>
                            </Row>
                        </Container>

                        <Container className= "Structre" fluid>
                            <Row> 
                                <Col>
                                    <Row>
                                        <Col>Welcome</Col>
                                        <Col>Most Used</Col>
                                    </Row>
                                </Col>

                                <Col> 
                                    Task Bar
                                </Col>
                            </Row>
                        </Container>
                    <Container fluid>
                        <Row>
                            <Col>
                                <MdLocalMovies />
                                <h1>Now Playing</h1>
                            </Col>
                        </Row>
                        <Row>                   
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </ Row>
                    </Container> <br />

                 <Footer/> 
            </Container>

         );
     }
}
export default StudentPortalForm;