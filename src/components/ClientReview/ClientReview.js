import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Image, Row} from "react-bootstrap";
import person from "../../asset/image/img.png"
class ClientReview extends Component {

    render() {
        let settings = {
            autoplay: true,
            vertical: true,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="text-center serviceMainTitle">CLIENT SAYS</h1>
                    <Row>
                        <Col>
                            <Slider {...settings}>
                                <div>
                                    <Row className="text-center">
                                        <Col>
                                            <Image className="circleImg" src={person} />
                                            <h5 className="py-2">Web Development</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, non! Lorem ipsum dolor sit amet.</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row className="text-center">
                                        <Col>
                                            <Image className="circleImg" src={person} />
                                            <h5 className="py-2">Web Development</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, non!</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Row className="text-center ">
                                        <Col>
                                            <Image className="circleImg" src={person} />
                                            <h5 className="py-2">Web Development</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, non!</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ClientReview;