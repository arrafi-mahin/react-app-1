import React, {Component, Fragment} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import CourseImage from '../../asset/image/courseImage.jpg';
import {Link} from "react-router-dom";


class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="text-center serviceMainTitle">OUR COURSES</h1>
                    <Row className="my-2">
                        <Col lg={6} md={12} sm={12}>
                            <Row className="my-4">
                                <Col lg={6} md={6} sm={12}>
                                    <Image className="img-fluid" src={CourseImage} />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="text-start my-2">
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error id itaque, laudantium nihil perspiciatis provident reprehenderit saepe tempora voluptatibus.</p>
                                    <Link to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row className="my-4">
                                <Col lg={6} md={6} sm={12}>
                                    <Image className="img-fluid" src={CourseImage} />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="text-start my-2">
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error id itaque, laudantium nihil perspiciatis provident reprehenderit saepe tempora voluptatibus.</p>
                                    <Link to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={6} md={12} sm={12}>
                            <Row className="my-4">
                                <Col lg={6} md={6} sm={12}>
                                    <Image className="img-fluid" src={CourseImage} />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="text-start my-2">
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error id itaque, laudantium nihil perspiciatis provident reprehenderit saepe tempora voluptatibus.</p>
                                    <Link to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row className="my-4">
                                <Col lg={6} md={6} sm={12}>
                                    <Image className="img-fluid" src={CourseImage} />
                                </Col>
                                <Col lg={6} md={6} sm={12} className="text-start my-2">
                                    <h5 className="courseTitle">Web Development</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error id itaque, laudantium nihil perspiciatis provident reprehenderit saepe tempora voluptatibus.</p>
                                    <Link to="/courseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;