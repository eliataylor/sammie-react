import React, {Component} from 'react';

class Santa extends Component {

    render() {
        return (
          <div id="santaCaseStudy" className="mt-3 mb-3">
            <div className="container">
              <h1>Santa</h1>
              <p className="mb-4 mt-4">Santa is a mobile app looking to fill the gap between the homeless and their community. It allows people to choose roles as &lsquo;elf&rsquo; or as &lsquo;santa&rsquo;. The elf role communicates with the homeless community and posts their wishes on the app and the santa role delivers the wishes posted near them.</p>
              <div className="row flex-wrap-reverse mt-5">
                <div className="col-12 col-md-6">
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
                <div className="mb-3 col-12 col-md-6 text-center">
                  <img src="/assets/santa/HomeScreen-inactive.png" className="img-fluid" style={{maxHeight:360}} />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-primary text-white mt-5" >
              <div className="row">
                <div className="p-5 mt-4 mb-4" style={{minHeight:'80vh', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <h2 style={{fontSize: 60}}>MVP</h2>
                  <h4 className="mt-2 mb-4" style={{opacity:.6}}>Visual Identify &amp; Prototyping</h4>
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
              <h5>Brand Image</h5>
              <p>The client wanted the style for the app to be centered around Christmas and these two characters that represent the user roles. Below you will see a preview of the style guide and components that I created based on the clients needs.</p>
              <p><img height='250' src='/assets/santa/santalogo.png' /></p>
              <div className="row">
                <div className="col-6 text-center"><img height='350' className="img-fluid" src='/assets/santa/santa-bootstrap-colors.png' /></div>
                <div className="col-6 text-center"><img height='350' className="img-fluid" src='/assets/santa/santa-bootstrap-components.png' /></div>
              </div>
            </div>

            <div className="container-fluid bg-info text-white" >
              <div className="row">
                <div className="p-5 mt-4 mb-4" style={{minHeight:'80vh', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <div>
                    <h2 style={{fontSize: 60, textIndent:-5}}>Final Designs</h2>
                    <p className="mt-5">Below are a few before and after photos of the screens I revamped.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
            <div className="row text-center mt-4 mb-4">
              <div className="col-6 mb-3"><strong>Before</strong></div>
              <div className="col-6 mb-3"><strong>After</strong></div>
              <div className="col-6 mb-5">
                <h6>Sign Up Screen (Before)</h6>
                <img className="img-fluid" src='/assets/santa/screenshot-1-before.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Sign Up Screen (After)</h6>
                <img className="img-fluid" src='/assets/santa/screenshot-1-after.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Role Selection Screen (Before)</h6>
                <img className="img-fluid" src='/assets/santa/screenshot-2-before.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Role Selection Screen (After)</h6>
                <img className="img-fluid" src='/assets/santa/screenshot-2-after.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Wishes Locator Screen (Before)</h6>
                <img className="img-fluid" src='/assets/santa/screenshot-3-before.png' />
              </div>
              <div className="col-6 mb-5">
                <h6>Wishes Locator Screen (After)</h6>
                <img className="img-fluid" src='/assets/santa/screenshot-3-after.png' />
              </div>
            </div>
            </div>

          </div>


        );
    }
}

export default Santa;
