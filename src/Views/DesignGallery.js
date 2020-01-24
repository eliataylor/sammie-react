import React, { Component } from 'react';
//import {Link} from "react-router-dom";

const projects = require('../projects.json');

class CaseStudies extends Component {
    state = { expanded: false };


    render() {
        return (
          <div className="container">
            <h1>Design Archives</h1>
            <div className="accordion" id="accordion">
              {Object.values(projects).map((section, sec) => {
                return (<div key={sec} className='card'>
                  <div className="card-header" >
                    <button
                        onClick={e => this.state.expanded === sec ? this.setState({expanded:false}) : this.setState({expanded:sec})}
                        className="btn btn-link" type="button" aria-expanded={this.state.expanded === sec ? 'true' : 'false'} aria-controls={'acc'+sec}>
                      {section.heading}
                    </button>
                  </div>
                  {this.state.expanded === sec ?
                    <div id={'acc'+sec} className='card-body collapse show' >
                        <p>{section.subheading}</p>
                        <div className="row">
                        {section.images.map((image, idx2) => {
                        return (<div className="col-3">
                                  <img src={image.src} srcSet={image.srcset} className="img-fluid"  />
                                </div>)
                          })
                        }
                        </div>
                    </div>
                    :
                    <div id={'acc'+sec} className='card-body collapse' >Loading arhives</div>
                  }

                </div>)
              })}
            </div>
          </div>
        );
    }
}

export default CaseStudies;
