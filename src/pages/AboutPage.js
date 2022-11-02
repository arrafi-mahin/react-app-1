import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"/>
                <PageTop pageTitle="About Me"/>
                <AboutDescription />
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;