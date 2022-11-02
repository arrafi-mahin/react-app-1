import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Line} from "recharts";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="text-center serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="text-center projectCard" >
                                <Card.Img  variant="top" src="https://source.unsplash.com/random/350×250" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="linkButton" to="/projectDetails">Go somewhere</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="text-center projectCard" >
                                <Card.Img className='img-fluid' variant="top" src="https://source.unsplash.com/random/350×250" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="linkButton" to="/projectDetails">Go somewhere</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="text-center projectCard" >
                                <Card.Img  variant="top" src="https://source.unsplash.com/random/350×250" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="linkButton" to="/projectDetails">Go somewhere</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;