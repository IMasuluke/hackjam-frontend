// Testing
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav } from 'react-bootstrap';
import { BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs";
import "./Footer.css";

class FooterForm extends Component {
    render (){
    return (
        <Container className= "Footer" fluid>
            <Row>
                    <Col className= "Contactus">
                      <h3>Contact Us </h3> <br />
                        <h4>+27 11 341 4569</h4>
                        <h4>eduvos@eduvos.com</h4>
                    </Col>
                    < Col className= "FindUs">
                        <h3>Find Us</h3> <br />
                        <h4>44 Alsatian Road, Glen Austin Midrand,
                            Johanessburg South Africa
                        </h4>
                    </Col>
                    <Col className= "QuickLinks">
                    <Nav>
                        <h3>Quick links</h3> <br/>
                        <h4>Career</h4> 
                        <h4>Eduvos Shop</h4>
                        <h4>FAQ</h4>
                    </Nav>
                    </Col>
                    <Col className= "FollowUs"> 
                        <h3>Follow us on Social Media</h3> <br />
                        <Row className= "Icons">
                            <Col>
                            <BsInstagram/>
                            </Col> 
                            <Col><BsTwitter/>
                            </Col>
                            <Col>
                            <BsFacebook/>
                            </Col>
                        </Row>
                        <Row>
                            <h3>Privacy Policy | POPI | Terms & Conditions</h3>
                        </Row>
                    </Col>
                </Row>
                 
        
         
        </Container>
    );

    }
}
export default FooterForm;