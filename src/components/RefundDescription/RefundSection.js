import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class RefundSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <ul>
                                <li className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse magni molestiae natus quas quod voluptatibus.</li>
                                <li className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi architecto dolorum maxime quis repudiandae sed ullam veritatis voluptatem. Cumque est in incidunt modi nemo optio quod repellendus sequi unde.</li>
                                <li className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda aut dignissimos dolorum hic nisi odio quod, sunt temporibus voluptate?</li>
                                <li className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et incidunt laborum non quam vel voluptas. Beatae deleniti eos laudantium magnam molestias nihil pariatur quae. Asperiores, autem commodi dicta esse expedita magnam odit perspiciatis temporibus. Ad aperiam commodi consequuntur, dolorum ducimus et explicabo fugit incidunt iste minima molestiae nemo nulla pariatur placeat rem sit vero! A accusamus aliquam at autem doloremque dolores ducimus explicabo fugiat hic in, iste magni nesciunt nisi officiis perspiciatis placeat quibusdam reprehenderit soluta.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RefundSection;