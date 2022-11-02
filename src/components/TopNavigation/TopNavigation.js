import React, {Component, Fragment} from 'react';
import "../../asset/css/custom.css"
import "../../asset/css/bootstrap.min.css"
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            navBarTitle: "navTitle",
            navLogo: "",
            navVariant:"dark",
            navBg: "navBackground",
            navItem: "navItem",
            pageTitle: this.props.title,
        }
    }
    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navBarTitle: 'navTitleScroll', navBg:"navBackgroundScroll", navItem:"navItemScroll", navVariant: "light"})
        }
        else if(window.scrollY<100) {
            this.setState({navBarTitle: 'navTitle', navBg:"navBackground" , navItem:"navItem", navVariant: "dark"})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBg} fixed="top" collapseOnSelect expand="lg"  variant={this.state.navVariant}>
                    <Container >
                        {/*<NavLink to="/">  <Navbar.Brand className={this.state.navBarTitle}>Mahin</Navbar.Brand></NavLink>*/}
                        <Navbar.Brand > <NavLink to="/" className={this.state.navBarTitle}>Mahin</NavLink> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink exact activeClassName='active' className={this.state.navItem} to="/home">HOME</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeClassName='active' className={this.state.navItem} to="/services">SERVICES</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeClassName='active' className={this.state.navItem} to="/courses">COURSES</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeClassName='active' className={this.state.navItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeClassName='active' className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact activeClassName='active' className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;