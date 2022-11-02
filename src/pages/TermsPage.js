import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Footer from "../components/Footer/Footer";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Conditions"/>
                <PageTop pageTitle="Terms & Conditions" />
                <TermsDescription />
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;