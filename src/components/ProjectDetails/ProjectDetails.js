import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="projectImage " src="https://source.unsplash.com/random/350×350"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazzar</h2>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate delectus eligendi inventore laboriosam maxime nostrum perferendis sint totam voluptatem?</p>
                            <ul>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, incidunt!</li>
                                <li className="serviceDescription">Lorem ipsum dolor.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit.</li>
                            </ul>
                            <Button variant="primary" size="lg">Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;