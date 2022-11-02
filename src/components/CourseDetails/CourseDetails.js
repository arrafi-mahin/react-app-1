import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col lg={6} md={6} sm={12} className="">
                                    <h3 className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, mollitia.</h3>
                                    <p className="text-warning mb-1">Lorem ipsum dolor sit.</p>
                                    <p className="text-warning mb-1">Lorem ipsum dolor sit amet.</p>
                                </Col>
                                <Col lg={6} md={6} sm={12} className="">
                                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, aspernatur culpa dolore et impedit laudantium libero necessitatibus nihil non nulla omnis, optio quaerat similique sunt tempora ut vero voluptates, voluptatum! Asperiores aut et fugiat numquam reprehenderit sequi similique voluptates. Ad amet atque beatae consequatur eos,  </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row className="mt-2">
                        <Col lg={6} md={6} sm={12}>
                            <h1>Skill You Get</h1>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, esse.</li>
                                <li>consectetur adipisicing elit. Consequatur</li>
                                <li>Lorem ipsum dolor sit amet,</li>
                                <li>ipsum dolor sit amet</li>
                                <li>dolor sit amet, consectetur adipisicing elit</li>
                                <li>consectetur adipisicing elit. Consequatur, esse.</li>
                                <Button className="mt-4" variant="primary" size="lg">More Info</Button>{' '}
                            </ul>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <ReactPlayer
                                className='react-player'
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                width='100%'
                                height='100%'
                            />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;