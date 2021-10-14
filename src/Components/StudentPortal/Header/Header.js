import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Navbar, Nav, Image, Overlay, OverlayTrigger, Tooltip, NavDropdown } from 'react-bootstrap';
import Image1 from "../../../Images/Pretoria_Campus.jpg";
import Image2 from "../../../Images/EduvosLogo(Blue).png";
import ImageKarri from "../../../Images/Karri.png";
import {   BiSearch} from "react-icons/bi";
import {   CgProfile} from "react-icons/cg";
import "./Header.css";

 
 
class HeaderForm extends Component {

        render (){
        return (
            < Container fluid ClassName= "ParentContainer">

            
    	        <Row>
                    <Col className= "Image1">
                    <img className="Image1" src={Image1} alt="CampusImage" fluid />
                    </Col>
                </Row>
            
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
                        
                         <NavDropdown title= "Midrand" id= "NavDropCampus">
                            <NavDropdown.Item href="#action/3.1"> Campus Tour </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Midrand Community</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">SRC (Student Representatives Council)</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Student Accommodation </NavDropdown.Item>
                         </NavDropdown>
                         <NavDropdown title= "Finances" id= "NavDropFinances">
                            <NavDropdown.Item href="#action/3.1"> Student Account </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Make Payment</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Finance Department</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                               
                                 <button variant= "light">
                                     <img className="ImageKarri" roundedCircle src={ImageKarri} alt="CampusImage" fluid roundedCircle/>
                                     <span>Karri</span> 
                                 </button> 
                            </NavDropdown.Item>
                                                      
                         </NavDropdown>

                        <NavDropdown title= "Student Life" id= "NavDropStudentLife">
                            <NavDropdown.Item href="#action/3.1"> Clubs & Associations</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Orientation & Induction</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Eduvos Shop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Career</NavDropdown.Item>
                        </NavDropdown>
                         <NavDropdown title= "Support" id= "NavDropSupport">
                            <NavDropdown.Item href="#action/3.1"> Academic Support</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1"> Psychology</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1"> IT Support</NavDropdown.Item>
                         </NavDropdown>
                        
                        {/* <Nav.Link href="#pricing">Support</Nav.Link> */}
                    </Nav>
                        {/* <Navbar.Collapse>< BiSearch/></Navbar.Collapse> */}
                        
                       
                        < BiSearch/>
                        <CgProfile/>
                   
                </Container>
            </Navbar>

            </Container>
            
        );
    }

}
export default HeaderForm;