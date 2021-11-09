import React, { Component } from "react";
import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import { IoTodayOutline  } from "react-icons/io5";
import "./StudentPortal.css";


class AgendaForm extends Component {
   
     render() {
         return (

                    <Card style={{ width: '18rem' }}>
                     <Card.Header className= "header" href="#"> <IoTodayOutline /> Timetable</Card.Header>
                    <Card.Body>
                       
                        <Card.Title> Monday </Card.Title>
                        <Card.Text>
                            <h6>8pm | Database Management</h6>
                            <h6>12pm | Network Security</h6>
                            
                        </Card.Text>
                        <hr />
                        <Card.Title> Tuesday </Card.Title>
                        
                    </Card.Body>
                    </Card>

            );
        }
    }
    export default AgendaForm;