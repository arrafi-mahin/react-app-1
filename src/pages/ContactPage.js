import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact Us"/>
                <PageTop pageTitle="Contact Me" />
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;