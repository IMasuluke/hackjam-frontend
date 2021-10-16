import React, { Component } from "react";

import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import { IoNewspaperOutline  } from "react-icons/io5";
import { MdStars  } from "react-icons/md";
import { ImLibrary, ImProfile  } from "react-icons/im";
import { BsChatSquareTextFill, BsCalendar3  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";

class FavouriteForm extends Component {
   

     render() {
         return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Header> 
                             <MdStars/> Most used 
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item href="#/keke1">
                               <BsChatSquareTextFill /> Chats
                                
                            </ListGroup.Item>
                        
                            <ListGroup.Item href="#/keke2">
                               <MdEmail /> Email
                                
                            </ListGroup.Item>
                            <ListGroup.Item href="#/keke3">
                               <BsCalendar3 /> Calendar
                                
                            </ListGroup.Item>
                            <ListGroup.Item href="#/keke4">
                               <ImProfile /> Student Advisor
                                
                            </ListGroup.Item>
                            <ListGroup.Item href="#/keke5">
                               <ImLibrary /> Libary
                                
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                );
     }
}
export default FavouriteForm;