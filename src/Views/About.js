import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
			       <div className="container mt-5 pb-5">
               <div className="d-flex" style={{marginTop:60, backgroundImage:'url(/assets/img-sam.jpg)', backgroundSize:'cover', backgroundPosition:'left 50%', minHeight:'60vh'}}>
                    <div className="cvBlock col-10 col-sm-9 col-md-6 ml-auto mr-3 bg-white rounded">
                        <h3 className="cvHeader rounded">WORK EXPERIENCE</h3>
                        <div className="cvList">
                          <div className="cvItem">
                            <h5 className="mb-1">INTERRUPT MEDIA</h5>
                            <h6>Design Lead</h6>
                            <div className="timeBar">&nbsp;</div>
                            <div className='row fontLight'>
                              <span className='col-6'>Apr 2018</span>
                              <span className='col-6 text-right'>Present</span>
                            </div>
                          </div>
                          <div className="cvItem">
                            <h5 className="mb-1">FREELANCE</h5>
                            <h6>Graphic and UX Designer</h6>
                            <div className="timeBar">&nbsp;</div>
                            <div className='row fontLight'>
                              <span className='col-6'>Aug 2016</span>
                              <span className='col-6 text-right'>Present</span>
                            </div>
                          </div>
                          <div className="cvItem">
                            <h5 className="mb-1">TOBI</h5>
                            <h6>Marketing</h6>
                            <div className="timeBar">&nbsp;</div>
                            <div className='row fontLight'>
                              <span className='col-6'>Apr 2014</span>
                              <span className='col-6 text-right'>Aug 2018</span>
                            </div>
                          </div>
                        </div>
                    </div>
               </div>
                <h1 className="text-primary mt-5 mb-5">Marketing professional turned designer</h1>
                <p>The essence of effective marketing starts with design.</p>
                <p>Regardless of your strategy, visual impressions are the first, and often best, opportunity to communicate a message and win your response. While a piece of art can be criticized or acclaimed depending on who you ask, effective marketing design is based on impulse and universal order of how information is absorbed by the eye.</p>
                <p>Aesthetics are a matter of taste, up to the artist and target demographic. As important as those are, the organization of text and information is based on the consistent objective to send their message as clearly and quickly as possible.</p>
                <p>Meanwhile, to begin the process of design, style is woven in to capture a particular audience and transmit the message to match their identity with yours.</p>
                <p>All of this is done through simplicity and balance.</p>
            </div>
        );
    }
}

export default About;
