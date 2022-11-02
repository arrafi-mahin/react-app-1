import React, {Component, Fragment} from 'react';
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import AllProjects from "../components/AllProjects/AllProjects";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolio"/>
                <PageTop pageTitle="Portfolio" />
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;