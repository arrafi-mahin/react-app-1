import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
           <Fragment>
               <TopNavigation title="Privacy & Policy" />
               <PageTop pageTitle="Privacy & Policy" />
               <PrivacyDescription/>
               <Footer/>
           </Fragment>
        );
    }
}

export default PrivacyPage;