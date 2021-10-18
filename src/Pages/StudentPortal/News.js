import React, { Component } from "react";

import { Button,Container,Row, Col,Card, ListGroup, Carousel, CardGroup } from 'react-bootstrap';
import { IoNewspaperOutline  } from "react-icons/io5";
import covid from "../../Images/News/covidupdate.jpg"
import "./StudentPortal.css";


class NewsForm extends Component {
   

     render() {
         return (
             <div>
                 <h3> <IoNewspaperOutline />Latest News | <a href="#"> News </a> </ h3>
                <CardGroup>
                <Card className= "card">
                    <Card.Img className="pics" variant="top" src={covid} />
                    <Card.Body>
                    <Card.Title>Covid Update</Card.Title>
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
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className= "card">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
                </div>
             );
     }
}
export default NewsForm;