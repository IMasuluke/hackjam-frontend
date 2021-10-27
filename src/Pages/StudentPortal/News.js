import React, { Component } from "react";

import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import { IoNewspaperOutline  } from "react-icons/io5";
import covid from "../../Images/News/covidupdate.jpg";
import academic from "../../Images/News/academic_success.jpg";
import Career from "../../Images/Adverts/VirtualCareerAd.PNG";
import "./StudentPortal.css";


class NewsForm extends Component {
   

     render() {
         return (
             <div>
                 <h3> <IoNewspaperOutline />Latest News | <a href="/events" target="_blank" rel="noopener noreferre"> News </a> </ h3> <hr />
                <CardGroup>
                <Card className= "card">
                    <Card.Img className="pics" variant="top" src={covid} />
                    <Card.Body>
                    <Card.Title>Covid Update</Card.Title>
                    <hr />
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className= "card">
                    <Card.Img className="pics" variant="top" src={academic} />
                    <Card.Body>
                    <Card.Title>Academic Support | Block 4 </Card.Title>
                    <hr />
                    <Card.Text>
                        Supplementary Assessments & Academic Support Webinar.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"> 10 October 2021</small>
                    </Card.Footer>
                </Card>
                <Card className= "card">
                    <Card.Img className="pics" variant="top" src={Career} />
                    <Card.Body>
                    <Card.Title>Career Fair (25-29 Oct)</Card.Title>
                    <hr />
                    <Card.Text>
                        Register online for which session you would like to see 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">10 October 2021</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                </div>
             );
     }
}
export default NewsForm;