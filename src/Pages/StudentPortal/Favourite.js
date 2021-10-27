import React, { Component } from "react";

import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import { IoNewspaperOutline  } from "react-icons/io5";
import { MdStars  } from "react-icons/md";
import { ImLibrary, ImProfile  } from "react-icons/im";
import { BsChatSquareTextFill, BsCalendar3  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";
import "./StudentPortal.css";



class FavouriteForm extends Component {
   
   

     render() {
         return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Header className= "header"  > 
                             <MdStars /> Most used 
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="#/keke1">
                               <BsChatSquareTextFill /> Chats
                                
                            </ListGroup.Item>
                        {/* href= "/ReturningStudentWelcome" target="_blank" rel="noopener noreferre" */}
                            <ListGroup.Item action href="#/keke2">
                               <MdEmail /> Email
                                
                            </ListGroup.Item>
                            <ListGroup.Item action href="#/keke3">
                               <BsCalendar3 /> Calendar
                                
                            </ListGroup.Item>
                            <ListGroup.Item action href="#/keke4">
                               <ImProfile /> Student Advisor

                           
                            </ListGroup.Item>
                            <ListGroup.Item action href="https://pearson.primo.exlibrisgroup.com/discovery/account?vid=27PIOHE_INST:27PIOHE_INST&section=overview&lang=en" target="_blank" rel="noopener noreferre">
                               <ImLibrary /> Libary
                                
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                );
     }
}
export default FavouriteForm;