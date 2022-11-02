import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";


class Analysis extends Component{
    constructor(props) {
        super(props);
        this.state={
            data: [
                {
                  Technology:'Java', Projects:100
                },
                {
                    Technology:'Kotlin', Projects:30
                },
                {
                    Technology:'SQL', Projects:90
                },
                {
                    Technology:'Bootstrap', Projects:95
                },
                {
                    Technology:'Jquery', Projects:60
                },
                {
                    Technology:'React', Projects:90
                },
                {
                    Technology:'PHP', Projects:100
                },
                {
                    Technology:'Angular', Projects:70
                },

            ]
        }
    }
    render() {
        let blue= "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{height: "300px"}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>

                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey={"Technology"} />
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}></Bar>

                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="textJustify"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis culpa cumque cupiditate debitis deserunt dignissimos dolorem dolores dolorum ducimus earum eum ex expedita facilis fuga in, <br></br> ipsam iste iure laborum laudantium magni maiores minus modi molestiae nemo neque numquam, pariatur quam, qui quia quod saepe sed similique? Cupiditate deleniti dolorum excepturi sunt tempore. Accusamus adipisci aspernatur corporis dicta dignissimos doloremque error exercitationem expedita, laborum modi nihil numquam obcaecati odit praesentium quam quasi rem repudiandae suscipit unde veniam! Ad at minima nesciunt. A, ad adipisci alias, aspernatur atque commodi consectetur debitis delectus dicta dolore eius error esse, et excepturi facilis harum inventore labore magnam magni non odit quae quas quasi quos recusandae repellendus soluta tenetur veniam vitae voluptate. Animi autem dolorem enim explicabo harum </p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;