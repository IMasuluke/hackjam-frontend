// Testing
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row, Col, Image, Nav, Offcanvas, Card } from 'react-bootstrap';
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { SiMicrosoftoffice} from "react-icons/si";
import { MdHelpOutline} from "react-icons/md";
import "./Footer.css";
import Image2 from "../../../Images/EduvosLogo(Blue).png";
import Logo from "../../../Images/Logos/Logo(Motto).png";

class FooterForm extends Component {

     constructor (){
        super ();
        this.state = {
            show: false
        };
    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState ({show:true});
    };
    hideModal = () => {
        this.setState ({show:false});

    }

    render (){
    return (
       

        <div className= "ParentContainer" >
             
        <Container  fluid className="Footer">
    

      <Offcanvas show={this.state.show} onHide={this.hideModal} placement= "end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard  </Offcanvas.Title>
         
        </Offcanvas.Header>
        <Offcanvas.Body>
            <hr/>
           <Card body   > <SiMicrosoftoffice/> Microsoft Office</Card>
           <br/>
           <Card body>This is some text within a card body.</Card>
           <br/>
           <Card body>This is some text within a card body.</Card>
           <br/>
           <hr/>
           <Card body> <MdHelpOutline/> Help.</Card>
        </Offcanvas.Body>
      </Offcanvas>

            <Row  >
                    <Col className= "Contactus">
                      <h3>Contact Us </h3> 
                      <hr className= "line"/>
                        <h4>+27 11 341 4569</h4>
                        <h4>eduvos@eduvos.com</h4>
                    </Col>
                    < Col className= "FindUs">
                        <h3>Find Us</h3> 
                         <hr className= "line"/>
                        <h4>44 Alsatian Road, Glen Austin Midrand,
                            Johanessburg South Africa
                        </h4>
                    </Col>
                    <Col className= "QuickLinks">
                    
                        <h3>Quick links</h3>
                         <hr className= "line"/>
                        <h4>Career</h4> 
                        <h4>Eduvos Shop</h4>
                        <h4>FAQ</h4>
                    
                    </Col>
                    <Col className= "FollowUs"> 
                        
                        <h3>Follow us on Social Media</h3> 
                         <hr className= "line"/>
                        <Row className= "Icons">
                            <Col>
                            < a  href= "https://www.instagram.com/eduvoseducation/" target="_blank" rel="noopener noreferre" style= {{color: "white"}}> <BsInstagram size= {30} /> </a> {' '}
                            < a href= "https://twitter.com/edu_vos" target="_blank" rel="noopener noreferre" style= {{color: "white"}}> <BsTwitter size= {30} /> </a> {' '}
                                                      
                            < a href= "https://www.facebook.com/EduvosEducationSA/" target="_blank" rel="noopener noreferre" style= {{color: "white"}}> <BsFacebook size= {30} /> </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h4> Privacy Policy | POPI | Terms & Conditions

                            </h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        
                    </Col>
                    
                </Row>
               
                 
        
         </Container>
         <Container className= "bots" >
            <Row>
                 <Col >
                        <img class="rounded-circle"  src={Image2} alt="CampusImage"
                        className="edulogo" action onClick={this.showModal}  />
                </Col>
            </Row>
        </Container>

        </div>
    );

    }
}
export default FooterForm;