import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="SummaryBanner SummarySection p-0">
                    <div className="SummaryBannerOverlay">
                        <Container className="text-center">
                            <Row className="">
                                <Col lg={8} md={6} sm={12}>
                                        <Row className="text-light countSection">
                                            <Col >
                                                <h1 className="countNumber m-0">
                                                    <CountUp start={0} end={100}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delaycell>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                                <h4 className="countTitle">TOTAL PROJECTS</h4>
                                                <hr className=" w-25 m-auto"/>
                                            </Col>

                                            <Col>
                                                <h1 className="countNumber m-0">
                                                    <CountUp start={0} end={250}>
                                                        {({ countUpRef, start }) => (
                                                            <VisibilitySensor onChange={start} delaycell>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                </h1>
                                                <h4 className="countTitle">TOTAL CLIENTS</h4>
                                                <hr className="w-25 m-auto"/>
                                            </Col>
                                        </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-start">How I Work</Card.Title>

                                            <Card.Text>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                                <p className="cardSubTitle text-start"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;