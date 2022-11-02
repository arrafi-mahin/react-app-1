import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webCode from  '../../asset/image/html-code.svg'
import mobileCode from  '../../asset/image/html-mobile.svg'
import graphic from '../../asset/image/graphics.svg'
import '../../asset/css/custom.css'
class Services extends Component {
    render() {
        return (
            <Fragment>

                <Container id="services">
                    <h1 className="text-center serviceMainTitle">MY SERVICES</h1>
                    <Row>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard">

                                    <img className="cardImage" src={webCode} alt="Web Development" />

                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quae.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard">
                                    <img className="cardImage" src={mobileCode} alt="Mobile App" />

                                    <h2 className="serviceName">Mobile App Development</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quae.</p>

                                </div>
                               </Col>
                        <Col lg={4} md={6} sm={12}>
                                <div className="serviceCard">
                                    <img className="cardImage" src={graphic} alt="Graphics design" />

                                    <h2 className="serviceName">Graphics Design</h2>
                                    <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quae.</p>

                                </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;