import React, { Component } from "react";
import {  Col,Card, ListGroup, Carousel } from 'react-bootstrap';
import Career from "../../Images/Adverts/VirtualCareerAd.PNG";
import Tutoring from "../../Images/Adverts/Tutoring.jpg";
import Campus from "../../Images/EduvosLogo(Blue).png";
import "./StudentPortal.css";

class AdvertForm extends Component {
   
     render() {
         return (

                    <Carousel  >
                            <Carousel.Item>
                                <img
                            className="ad"
                                src={Tutoring}
                                alt="Tutoring"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="ad"
                                src={Career}
                                alt="Career Fair"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="ad"
                                src={Campus}
                                alt="Third slide"
                                />
                                
                            </Carousel.Item>
                        </Carousel>
                        );
        }
    }
    export default AdvertForm;