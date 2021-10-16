import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container, Row, Col,Card, ListGroup ,CardGroup } from 'react-bootstrap';
import Health from "../../Images/Support/Technology_tools.png";
import Tutoring from "../../Images/Adverts/Tutoring.jpg";
import Campus from "../../Images/EduvosLogo(Blue).png";


class CardForms extends Component {
   
     render() {
         return (
                <div>
                 <h3> Additional </ h3>
                <CardGroup>
                <Card>
                    <Card.Header>Health & Wellbeing</Card.Header>
                    <Card.Img variant="top" src={Health} />
                    <Card.Body>
                    <Card.Link>Safet on Campus</ Card.Link> <br />
                    <Card.Link>School Clince</ Card.Link> <br />
                    <Card.Link>Counselling Services</ Card.Link>
                    </Card.Body>
                   
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                </CardGroup>
                </div>
            );
        }
    }
    export default CardForms;