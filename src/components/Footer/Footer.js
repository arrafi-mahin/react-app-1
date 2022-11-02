import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
           <Fragment>
               <Container fluid={true} className="footerSection text-center">
                   <Row >
                       <Col lg={3} md={6} sm={12} className='p-lg-5 p-sm-2 textJustify'>
                           <h1 className="serviceName">Follow Me</h1>
                           <a className="socialLink" target="_blank" href="www.facebook.com/arrafi"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br />
                           <a className="socialLink" target="_blank"  href="www.youtube.com"><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                       </Col>
                       <Col lg={3} md={6} sm={12} className='p-lg-5 p-sm-2  textJustify'>
                           <h1 className="serviceName">Address</h1>
                           <p className="serviceDescription">#79/6 padma Residential Aria, 3rd floor fron side, rajshahi</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> example@domain.com</p>
                           <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> +88017000000</p>
                       </Col>
                       <Col lg={3} md={6} sm={12} className='p-lg-5 p-sm-2 textJustify'>
                           <h1 className="serviceName">Information</h1>
                           <Link className="footerLink" to="/about">About Me</Link><br />
                           <Link className="footerLink" to="/contact">Contact Me</Link>
                       </Col>
                       <Col lg={3} md={6} sm={12} className='p-lg-5 p-sm-2 textJustify'>
                           <h1 className="serviceName">Legal</h1>
                           <Link className="footerLink" to="/refund">Refund Policy</Link><br />
                           <Link className="footerLink"  to="/terms">Terms & Condition</Link><br />
                           <Link className="footerLink"  to="/privacy">Privacy & Policy</Link>
                       </Col>
                   </Row>
               </Container>

               <Container fluid={true} className="text-center copyrightSection">
                   <a className="copyrightLink" href="#">Mahin.com &copy; 2021-2022</a>
               </Container>

           </Fragment>
        );
    }
}

export default Footer;