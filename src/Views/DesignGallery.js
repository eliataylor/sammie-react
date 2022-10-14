import React, {Component} from 'react';
//import {Link} from "react-router-dom";

const projects = require('../projects.json');

class CaseStudies extends Component {
    state = { expanded: false };


    render() {
        return (
          <div className="container">
            <h1>Design Archives</h1>
            <div className="accordion mb-5 mt-5" id="accordion">
              {Object.values(projects).map((section, sec) => {
                return (<div key={sec} className='card'>
                  <div className="card-header rounded" >
                    <button
                        onClick={e => this.state.expanded === sec ? this.setState({expanded:false}) : this.setState({expanded:sec})}
                        className="btn btn-link" type="button" aria-expanded={this.state.expanded === sec ? 'true' : 'false'} aria-controls={'acc'+sec}>
                      {section.heading}
                    </button>
                  </div>
                  {this.state.expanded === sec ?
                    <div id={'acc'+sec} className='card-body collapse show' >
                        <div className="row">
                        {section.images.map((image, idx2) => {
                        return (<div className="col-6 col-md-3 p-2">
                                  <img src={image.src} alt={image.alt} className="img-fluid"  />
                                </div>)
                          })
                        }
                        </div>
                    </div>
                    :
                    <div id={'acc'+sec} className='card-body collapse' >Loading archives</div>
                  }

                </div>)
              })}
            </div>
          </div>
        );
    }
}

export default CaseStudies;
