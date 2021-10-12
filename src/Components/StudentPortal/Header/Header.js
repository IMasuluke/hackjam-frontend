import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import Image1 from "../../../Images/Pretoria_Campus.jpg";
import Image2 from "../../../Images/EduvosLogo(Blue).png"
import {   BiSearch} from "react-icons/bi"
import {   CgProfile} from "react-icons/cg"

class HeaderForm extends Component {
    render (){
        return (
            < Container fluid ClassName= "ParentContainer">

            <Container fluid ClassName= "Image">
    	        <Row>
                    <Col>
                    <img className="Image1" src={Image1} alt="CampusImage" fluid />
                    </Col>
                </Row>
            </Container>
            <Navbar bg="light" variant="light">
                <Container fluid ClassName= "NavBar">
                                         
                    <Navbar.Brand href="#home">
                        <img
                            src= {Image2}
                            width="80"
                            height="80"
                            className="Image2"
                            alt="Eduvos Logo"
                            rounded
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                         {/* Subject to change */}
                        <Nav.Link href="#home">Midrand</Nav.Link>
                        <Nav.Link href="#features">Finances</Nav.Link>
                        <Nav.Link href="#pricing">Student Life</Nav.Link>
                        <Nav.Link href="#pricing">Support</Nav.Link>
                    </Nav>
                        
                        <Col>
                       
                        < BiSearch/>
                            
                        <CgProfile/>
                        
                        </Col>
                    
                </Container>
            </Navbar>

            </Container>
            
        );
    }

}
export default HeaderForm;
