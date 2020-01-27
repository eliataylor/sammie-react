import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CaseStudies extends Component {

    render() {
        return (
          <div className="container">
            <div className="jumbotron d-flex flex-column" style={{backgroundImage:'url(/assets/Desktop-Img.png)', marginTop:50}}>
              <div className="flex-grow-1"></div>
              <div>
                <h3>Farm Fresh</h3>
                <p className="fontLight mb-4 mt-4">Buying produce directly from<br /> farmers has never been easier</p>
                <Link to="/case-studies/farm-fresh" style={{fontSize:15, fontWeight:600, padding:'15px 44px'}} className="btn btn-outline-light btn-lg">VIEW CASE STUDY</Link>
              </div>
            </div>

            <div className="jumbotron d-flex flex-column" style={{backgroundImage:'url(/assets/santa-photo.png)', marginBottom:75}}>
              <div className="flex-grow-1"></div>
              <div>
                <h3>Santa App</h3>
                <p className="fontLight mb-4 mt-4">Help fulfill wishes for the<br /> homeless in your community</p>
                <Link to="/case-studies/santa" style={{fontSize:15, fontWeight:600, padding:'15px 44px'}} className="btn btn-outline-light btn-lg">VIEW CASE STUDY</Link>
              </div>
            </div>


          </div>
        );
    }
}

export default CaseStudies;
