import React, {Component, Fragment, useState} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player/lazy'

class Video extends Component {
    constructor() {
        super();
        this.state={
            show: false,
        }

    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard text-center">
                            <div >
                                <p className="videoTitle">How I Do</p>
                                <p className="videoDes">consectetur adipisicing elit. Asperiores itaque libero molestias qui rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores itaque libero molestias qui rem. Dicta ducimus, excepturi laborum numquam quaerat quas similique unde! Alias at blanditiis corporis, deleniti, distinctio dolorem facilis laboriosam maiores minus molestias quidem quo quod repellendus vitae voluptatibus. Ab, assumenda at iste modi nulla numquam ut voluptatem.</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playButton" icon={faCirclePlay} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body className="p-0">
                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='course-player'
                                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                width='100%'
                                height='100%'
                            />
                        </div>
                    </Modal.Body>

                </Modal>

            </Fragment>
        );
    }
}

export default Video;