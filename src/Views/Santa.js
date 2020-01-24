import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Santa extends Component {

    render() {
        return (
          <div id="santaCaseStudy" className="row">
            <div className="container">
              <h1>Santa</h1>
              <p className="mb-4 mt-4">Santa is a mobile app looking to fill the gap between the homeless and their community. It allows people to choose roles as &lsquo;elf&rsquo; or as &lsquo;santa&rsquo;. The elf role communicates with the homeless community and posts their wishes on the app and the santa role delivers the wishes posted near them.</p>
              <div className="row mt-5">
                <div className="col-8">
                    <h4>
                      <span className='leftIcon'><img src='/assets/profileicon.png' /></span>
                      ROLE: UI/UX DESIGNER
                    </h4>
                    <h4 className="mt-5 mb-5">
                      <span className='leftIcon'><img src='/assets/alarmclock.png' /></span>
                      TIMELINE: 2 WEEKS
                    </h4>
                    <h4>
                      <span className='leftIcon'><img src='/assets/lettericon.png' /></span>
                      DELIVERABLES:
                    </h4>
                    <div style={{paddingLeft:40, fontSize:12}}>
                      I was responsible for redesigning existing screens in the app, simplifying the UX, prototyping, and  creating a formal style guide based around the logo image provided by the client.
                    </div>
                    <h4 className='mt-5 mb-3'>TOOLS USED:</h4>
                    <div className="d-flex w-80 mt-2">
                      <img src='/assets/figma.png' height='40' className="mr-4" />
                      <img src='/assets/illustrator.png' height='40' />
                    </div>
                </div>
                <div className="col-4">
                  <img src="/assets/santa/HomeScreen-inactive.png" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-primary text-white p-5">
              <div className="row">
                <div className="container mt-2 mb-2">
                  <h2 style={{fontSize:'250%', fontWeight:700}}>MVP</h2>
                  <h4 className="mt-3 mb-3">Visual Identify &amp; Prototyping</h4>
                  <p>The client had an image created to represent the brand and she wanted to base the app around these two characters that would represent the two roles in this app. In this section I go over the process I went through to create the visual aspects of the Santa brand.</p>
                </div>
              </div>
            </div>
            <div className="container mt-5 mb-2">
              <h4>VISUAL IDENTITY</h4>
              <p>The goal was to build out three main user flows:</p>
              <ul style={{listStyle:'none', paddingLeft:0}}>
                <li><b>1.</b> Sign Up</li>
                <li><b>2.</b> Santa Fullfillment</li>
                <li><b>3.</b> Elf wish intake</li>
              </ul>
              <p className="text-center"><img height='250' src='/assets/santa/santalogo.png' /></p>
              <div className="row">
                <div className="col-6 text-center"><img height='350' src='/assets/santa/santa-bootstrap-colors.png' /></div>
                <div className="col-6 text-center"><img height='350' src='/assets/santa/santa-bootstrap-components.png' /></div>
              </div>
            </div>
            <div className="container-fluid bg-info text-white p-5 mt-5" >
              <div className="row">
                <div className="container mt-4 mb-4" style={{minHeight:'25vh', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <h2>Final Designs</h2>
                  <p>Below are a few before and after photos of the screens</p>
                </div>
              </div>
            </div>
            <div className="row text-center mt-4 mb-4">
              <div className="col-6 mb-3"><strong>Before</strong></div>
              <div className="col-6 mb-3"><strong>After</strong></div>
              <div className="col-6 mb-5">
                <h6>Sign Up Screen (Before)</h6>
                <img height='300' src='/assets/santa/screenshot-1-before.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Sign Up Screen (After)</h6>
                <img height='300' src='/assets/santa/screenshot-1-after.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Role Selection Screen (Before)</h6>
                <img height='300' src='/assets/santa/screenshot-2-before.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Role Selection Screen (After)</h6>
                <img height='300' src='/assets/santa/screenshot-2-after.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Wishes Locator Screen (Before)</h6>
                <img height='300' src='/assets/santa/screenshot-3-before.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Wishes Locator Screen (After)</h6>
                <img height='300' src='/assets/santa/screenshot-3-after.png' />
              </div>
            </div>

          </div>


        );
    }
}

export default Santa;
