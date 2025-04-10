import React, {Component} from 'react';
import {Link} from "react-router-dom";

export const CASESTUDIES = [
    {
        name: "Snonav",
        image: "/assets/snonav/landing.png",
        link: "/case-studies/snonav",
        desc: "A navigation app for the slopes for route planning, live navigation, & group skiing."
    }, {
        name: "WBAT Safety",
        image: "/assets/wbat/landing.png",
        link: "/case-studies/wbat",
        desc: "A robust system offering tools for compliance, risk management, report generation and management. "
    },
    /* {
        name: "Florul",
        image: "/assets/florul/landing.png",
        link: "/case-studies/florul",
        desc: "A unique virtual flower gifting and purchasing experience."
    },
     */
    {
        name: "Farm Fresh",
        image: "/assets/Desktop-Img.jpg",
        link: "/case-studies/farm-fresh",
        desc: "Buying produce directly from farmers has never been easier"
    },
    {
        name: "Santa App",
        image: "/assets/santa-photo.jpg",
        link: "/case-studies/santa",
        desc: "Help fulfill wishes for the homeless in your community"
    },
]

export function renderJumbotron(caseStudy) {
    return <div className="jumbotron d-flex flex-column mb-5"
                style={{backgroundImage: `url(${caseStudy.image})`, marginTop: 50}}>
        <div className="flex-grow-1"></div>
        <div className={'p-4'}>
            <h3>{caseStudy.name}</h3>
            <p className="fontLight mb-4 mt-4">{caseStudy.desc}</p>
            <Link to={caseStudy.link} style={{fontSize: 15, fontWeight: 600, padding: '15px 44px'}}
                  className="btn btn-outline-light btn-lg">VIEW CASE STUDY</Link>
        </div>
    </div>
}


class CaseStudies extends Component {

    render() {
        return (
            <div className="container">
                {CASESTUDIES.map((caseStudy, index) => renderJumbotron(caseStudy))}
            </div>
        );
    }
}

export default CaseStudies;
