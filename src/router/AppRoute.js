import React, {Component, Fragment} from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/home" element={<HomePage/>}/>
                    <Route exact path="/services" element={<ServicesPage/>}/>
                    <Route exact path="/courses" element={<CoursesPage/>}/>
                    <Route exact path="/portfolio" element={<PortfolioPage/>}/>
                    <Route exact path="/contact" element={<ContactPage/>}/>
                    <Route exact path="/about" element={<AboutPage/>}/>
                    <Route exact path="/refund" element={<RefundPage/>}/>
                    <Route exact path="/terms" element={<TermsPage/>}/>
                    <Route exact path="/privacy" element={<PrivacyPage/>}/>
                    <Route exact path="/projectDetails" element={<ProjectDetailsPage/>}/>
                    <Route exact path="/courseDetails" element={<CourseDetailsPage/>}/>
                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;