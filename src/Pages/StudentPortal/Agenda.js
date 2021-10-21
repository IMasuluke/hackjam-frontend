import React, { Component } from "react";
import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import { IoTodayOutline  } from "react-icons/io5";
import "./StudentPortal.css";


class AgendaForm extends Component {
   
     render() {
         return (

                    <Card style={{ width: '18rem' }}>
                     <Card.Header className= "header" href="#"> <IoTodayOutline /> Agenda</Card.Header>
                    <Card.Body>
                       
                        <Card.Title> Today </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <hr />
                        <Card.Title> Tomorrow </Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>

            );
        }
    }
    export default AgendaForm;