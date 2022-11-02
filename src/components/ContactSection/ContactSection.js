import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
           <Fragment>
               <Container className="mt-5">
                   <Row>
                       <Col className="textJustify" lg={6} md={6} sm={12}>
                           <h1 className="serviceName">Quick Connect</h1>
                           <Form>
                               <Form.Group className="mb-3">
                                   <Form.Label className="serviceDescription">Name</Form.Label>
                                   <Form.Control type="text" />
                                   {/*<Form.Text className="text-muted">*/}
                                   {/*    We'll never share your email with anyone else.*/}
                                   {/*</Form.Text>*/}
                               </Form.Group>

                               <Form.Group className="mb-3">
                                   <Form.Label className="serviceDescription">Email address</Form.Label>
                                   <Form.Control type="email"/>
                               </Form.Group>
                               <Form.Group className="mb-3" >
                                   <Form.Label className="serviceDescription">Your Message</Form.Label>
                                   <Form.Control as="textarea" rows="3" />
                                   {/*<Form.Text className="text-muted">*/}
                                   {/*    We'll never share your email with anyone else.*/}
                                   {/*</Form.Text>*/}
                               </Form.Group>
                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                           </Form>
                       </Col>
                       <Col lg={6} md={6} sm={12} className='textJustify'>
                           <h1 className="serviceName">Discuss Now</h1>
                           <p className="serviceDescription">#79/6 padma Residential Aria, 3rd floor fron side, rajshahi</p>
                           <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> example@domain.com</p>
                           <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +88017000000</p>
                       </Col>
                   </Row>

               </Container>
           </Fragment>
        );
    }
}

export default ContactSection;