import React, { Component } from "react";
import MidrandCampus from "./LoginCampus3.jpg";
import Footer from "../../Components/StudentPortal/Footer/Footer";
import Header from "../../Components/StudentPortal/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav } from 'react-bootstrap';

class StudentPortalForm extends Component {
     render() {
         return (
              <Container fluid>
                 <Header/>

                
                 <h1>Keke</h1>
                 

                 <Footer/>
            </Container>

        /* <div className="parentDiv">
            <div className="image">
            <img className="MidrandCampus3" src={MidrandCampus} alt="campus_image" />
            </div>
            <div>

            </div>
        </div> */
         );
     }
}
export default StudentPortalForm;