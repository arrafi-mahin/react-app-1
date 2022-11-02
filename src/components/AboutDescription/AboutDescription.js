import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} lg={12} md={12}>
                            <h1 className="serviceName text-start">Who I am</h1>
                            <hr/>
                            <p className="serviceDescription textJustify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cum deleniti ea earum est et hic libero numquam odio possimus provident quae, quaerat quasi quis sint tenetur? Iste, perferendis quae. Consectetur impedit rerum sed sequi vel. Architecto atque, autem consectetur cupiditate debitis dicta dignissimos, distinctio dolore, dolorem doloremque dolorum eaque earum enim et explicabo hic ipsum iste iure laudantium magnam mollitia necessitatibus neque nihil officiis omnis perspiciatis placeat provident quaerat quibusdam totam unde velit vero voluptas? Ad beatae ipsum ratione ut. Culpa exercitationem facere incidunt sapiente? Cupiditate distinctio, </p>
                            <h1 className="serviceName text-start">My Mission</h1>
                            <hr/>
                            <p className="serviceDescription textJustify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cum deleniti ea earum est et hic libero numquam odio possimus provident quae, quaerat quasi quis sint tenetur? Iste, perferendis quae. Consectetur impedit rerum sed sequi vel. Architecto atque, autem consectetur cupiditate debitis dicta dignissimos, distinctio dolore, dolorem doloremque dolorum eaque earum enim et explicabo hic ipsum iste iure laudantium magnam mollitia necessitatibus neque nihil officiis omnis perspiciatis placeat provident quaerat quibusdam totam unde velit vero voluptas? Ad beatae ipsum ratione ut. Culpa exercitationem facere incidunt sapiente? Cupiditate distinctio, </p>
                            <h1 className="serviceName text-start">My Vision</h1>
                            <hr/>
                            <p className="serviceDescription textJustify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cum deleniti ea earum est et hic libero numquam odio possimus provident quae, quaerat quasi quis sint tenetur? Iste, perferendis quae. Consectetur impedit rerum sed sequi vel. Architecto atque, autem consectetur cupiditate debitis dicta dignissimos, distinctio dolore, dolorem doloremque dolorum eaque earum enim et explicabo hic ipsum iste iure laudantium magnam mollitia necessitatibus neque nihil officiis omnis perspiciatis placeat provident quaerat quibusdam totam unde velit vero voluptas? Ad beatae ipsum ratione ut. Culpa exercitationem facere incidunt sapiente? Cupiditate distinctio, </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;