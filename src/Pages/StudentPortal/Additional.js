import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container, Row, Col,Card, ListGroup ,CardGroup } from 'react-bootstrap';
import Health from "../../Images/Support/Technology_tools.png";
import Tech from "../../Images/Support/per-strategy.png";
import Study from "../../Images/Support/studying.jpg";
import "./StudentPortal.css";


class CardForms extends Component {
   
     render() {
         return (
                <div>
                 <h3> Additional </ h3>
                <CardGroup>
                <Card className= "card" >
                    <Card.Header className= "header">Health & Wellbeing</Card.Header>
                    <Card.Img className= "pics" variant="top" src={Health} />
                    <Card.Body>
                    <Card.Link href="#">Safet on Campus</ Card.Link> <br />
                    <Card.Link href="#" >School Clince</ Card.Link> <br />
                    <Card.Link href="#">Counselling Services</ Card.Link>
                    </Card.Body>
                   
                </Card>
                <Card className= "card">
                     <Card.Header className= "header">Technology Tools </Card.Header>
                    <Card.Img className= "pics" variant="top" src={Tech} />
                    <Card.Body>
                        <Card.Link href="#">Office 365</ Card.Link> <br />
                         <Card.Link href="#">Wi-Fi Setup</ Card.Link> <br />
                        <Card.Link href="#" >Student Hub Training</ Card.Link> <br />
                        <Card.Link href="#"> Printing </ Card.Link>
                    </Card.Body>
                    
                </Card>
                <Card className= "card">
                     <Card.Header className= "header">Study Related</Card.Header>
                    <Card.Img className= "pics" variant="top" src={Study} dimension= "width"/>
                    <Card.Body>
                        <Card.Link href="#">Rules and Syllabuses </ Card.Link> <br />
                        <Card.Link href="#" >Textbook List</ Card.Link> <br />
                        <Card.Link href="#">Turnit in</ Card.Link> <br />
                         <Card.Link href="#">Plagiarism</ Card.Link>
                    </Card.Body>
                    
                </Card>
                </CardGroup>
                </div>
            );
        }
    }
    export default CardForms;