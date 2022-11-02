import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="My Services" />
                <Services />
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;