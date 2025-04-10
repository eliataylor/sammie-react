import React, {Component} from 'react';

const projects = require('../archives.json');

class DesignGallery extends Component {
    state = {expanded: false};

    render() {
        return (
            <div className="container">
                <h1>Design Archives</h1>
                <div className="accordion mb-5 mt-5" id="accordion">
                    {Object.values(projects).map((section, sec) => {
                        return (<div key={sec} className='accordion-item'>
                            <h2 className="accordion-header" id={`heading${sec}`}>
                                <button
                                    onClick={e => this.state.expanded === sec ? this.setState({expanded: false}) : this.setState({expanded: sec})}
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse" data-bs-target={'acc' + sec}
                                    aria-expanded={this.state.expanded === sec ? 'true' : 'false'}
                                    aria-controls={'acc' + sec}>
                                    <div className={'accordion-icon'}>
                                        <img className={'mr-5'} style={{height: 30, marginRight:25}} src={section.icon}/>
                                    </div>
                                    {section.heading}
                                </button>
                            </h2>
                            {this.state.expanded === sec ?
                                <div id={`acc${sec}`} className="accordion-collapse collapse show"
                                     aria-labelledby={`heading${sec}`} data-bs-parent="#accordion">
                                    <div className={"accordion-body"}>
                                        <div className="row">
                                            {section.images.map((image, idx2) => {
                                                return (<div className="col-6 col-md-3 p-2">
                                                    <img src={image.src} alt={image.alt} className="img-fluid"/>
                                                </div>)
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                                :
                                <div id={`acc${sec}`} className="accordion-collapse collapse"
                                     aria-labelledby={`heading${sec}`} data-bs-parent="#accordion">
                                    <div className={"accordion-body"}></div>
                                </div>
                            }

                        </div>)
                    })}
                </div>
            </div>
        )
            ;
    }
}

export default DesignGallery;
