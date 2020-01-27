import React, { Component } from 'react';
import {Link} from "react-router-dom";

class FarmFresh extends Component {

    render() {
        return (
          <div id="santaCaseStudy" className="mt-3">
            <div className="container mb-5 mt-5">
              <h1>Farm fresh</h1>
              <p className="mb-5">
                Farm Fresh is a mobile and desktop app that is bridging the gap between consumers and local farms.
                <b> It provides a platform for consumers to connect with farmers</b> and purchase locally grown, organic produce. It allows farmers to supplement their income by posting their produce surplus online. This leads to less food waste and happier consumers.</p>
              <div className="row flex-wrap-reverse">
                <div className="col-12 col-md-6">
                    <h4>
                      <span className='leftIcon'><img src='/assets/profileicon.png' /></span>
                      ROLE: UI/UX DESIGNER
                    </h4>
                    <h4 className="mt-5 mb-5">
                      <span className='leftIcon'><img src='/assets/alarmclock.png' /></span>
                      TIMELINE: 8 WEEKS
                    </h4>
                    <h4>
                      <span className='leftIcon'><img src='/assets/lettericon.png' /></span>
                      DELIVERABLES:
                    </h4>
                    <div style={{paddingLeft:40, fontSize:12}}>
                       I was responsible for ideation, competitive research, user interviews, personas, journey maps, prototyping, usability testing, graphic design, data visualization, and the final stakeholder presentation.
                    </div>
                    <h4 className='mt-5 mb-3'>TOOLS USED:</h4>
                    <div className="d-flex w-80 mt-2">
                      <img src='/assets/sketch.png' height='40' />
                      <img src='/assets/figma.png' height='40' className="ml-4 mr-4" />
                      <img src='/assets/illustrator.png' height='40' />
                    </div>
                </div>
                <div className="mb-3 col-12 col-md-6 text-center">
                  <img src="/assets/farmfresh/iphone11pro/landingpage.png" className="img-fluid" style={{maxHeight:360}} />
                </div>
              </div>
            </div>
            <div className="container-fluid bg-info text-white mt-5" >
              <div className="row">
                <div className="p-5 mt-4 mb-4" style={{minHeight:'80vh', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <div>
                    <h2 style={{fontSize: 60, textIndent:-5}}>Research</h2>
                    <h4 className='mt-2 mb-4' style={{opacity:.6}}>THE DISCOVERY</h4>
                    <p>Conducting market and consumer research studies helped in prioritizing features for each user and flushed out the planning phase. Here I will share the key insights (separated for each user type) that defined the launch version of the product. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5 mb-2">
              <p className="text-center"><img src="/assets/farmfresh/farmershoppericon.png" style={{maxWidth:'100%'}} /></p>
              <h4 className="mt-5 mb-4">BRIDGING A GAP</h4>
              <p>Right from the start I knew that we would have <b>two very different users</b> for this app. There are the <b>shoppers</b>, who would be searching for local farms, browsing inventory, and making purchases. Then the <b>farmers</b> that would be adding or editing inventory, and processing orders.</p>
              <p>Given the 8-week timeline for the MVP, I focused on the most critical actions and made them as efficient and functional as possible for both users.</p>
              <p>Prior to diving into user interviews I used mindmapping, assumptions, and affinity mapping exercises to help gain clarity on some of the features that could be built into Farm Fresh.</p>

              <div className="row mt-5">
                  <div className="col-4">
                    <img className="img-fluid" src="/assets/farmfresh/Shoppersneeds.png"/></div>
                  <div className="col-8 align-self-center">
                    <h4><strong>SHOPPERS NEEDS</strong></h4>
                    <p>These were some needs expressed by some users during interviews. I rated them based on necessity for the MVP. When it came to prioritizing features, I found that searching farms and placing orders would be most important for a functional app. </p></div>
                </div>
            </div>

            <div className="container p-5 mt-5">
              <div className="row mb-3">
                  <blockquote className="blockquote mt-5 mb-5">
                    <p className="mb-0" style={{fontStyle:'italic'}}><img height="40" style={{marginTop:-50, marginRight:20}} src="/assets/farmfresh/quote.png"/>I love buying produce from my local farmers markets, but timings are restrictive, parking is a pain, and if you arrive late the inventory runs out quickly. It takes time out of my weekend that could have been spent with family</p>
                    <p className="text-right blockquote-footer text-dark" style={{fontWeight:700}}>USER RESEARCH PARTICIPANT</p>
                  </blockquote>
              </div>
              <div className="row fontLight mb-4">
                <p>Before beginning the user research phase, I had done a thorough competitive analysis and was aware that apps like <b>Instacart and AmazonFresh were the main competitors</b>, though they focus primarily on large supermarkets. It wasn’t until I spoke to some of our shopper users that I realized these <b>users felt frustrated with the limited grocery shopping app options, as they can’t see the origin state/country of the produce on these apps.</b> Given that they had no idea where their produce was coming from and were paying a premium for online grocery shopping, they were pretty frustrated. <b>100% of the users I interviewed valued knowing the origin of the food</b>, and the only contact that they had with their local farmers was at the farmers markets and even that had its cons.</p>
                <p>To help my team and I gain a deep understanding of our user and their needs, I built a journey map and user persona using the data I had collected.</p>
              </div>
            </div>

            <div className="container p-5 mt-5" >
            <p className="text-center"><img src="/assets/farmfresh/persona.png" className="img-fluid" /></p>
            </div>

            <div className="container p-5 mt-5" >
            <p className="text-center"><img src="/assets/farmfresh/journeymap.png" className="img-fluid" /></p>
            </div>

            <div className="container p-5 mt-5" >
              <div className="row">
                <div className="col-4">
                      <img className="img-fluid" src="/assets/farmfresh/Farmersneeds.png"/>
                </div>
                <div className="col-8 align-self-center">
                  <h4><strong>FARMERS NEEDS</strong></h4>
                  <p>These are the prioritized features for farmers. I believed messaging to be a useful feature as a future update, so it was placed lower on my priorities. For the MVP I focused on building FarmFresh as a seamless inventory and order management app. </p>
                </div>
                </div>
            </div>

            <div className="container p-5 mt-5" >
            <p className="text-center"><img src="/assets/farmfresh/shopperpersona.png" className="img-fluid" /></p>
            </div>


            <div className="container-fluid bg-primary text-white mt-5" >
              <div className="row">
                <div className="p-5 mt-4 mb-4" style={{minHeight:'80vh', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <div>
                    <h2 style={{fontSize: 60, textIndent:-5}}>MVP</h2>
                    <h4 className='mt-2 mb-4' style={{opacity:.6}}>Visual Identify &amp; Prototyping</h4>
                    <p>The goals for the shoppers experience on the MVP was to allow them to sign up for an account, search for farms based on their location and/or zipcode, view inventory on each farm near them, and check out. The goals for the farmer experience was to allow them to sign up for an account, add and edit inventory, manage incoming orders, and view past orders.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container p-5">
              <div className="row">
                  <p>Before beginning any design I wanted to create the structure of the site by building a site map and then sketched out the flows for each action that the MVP would allow each user type to take. Below I have two user flows, one for the shopper check out, and one for the farmer to view orders.</p>
                  <p className="text-center mt-4"><img src="/assets/farmfresh/ordersFlow.png" className="img-fluid" /></p>
                  <p className="text-center mt-4 mb-4"><img src="/assets/farmfresh/checkoutFlow.png" className="img-fluid" /></p>
                  <p className="text-center"><img src="/assets/farmfresh/SiteMapInitial.png" className="img-fluid" /></p>
              </div>
            </div>

            <div className="container">
              <h4>EARLY PROTOTYPING</h4>
              <p className="fontLight">One of my favorite ways to start protoyping is with an exercise called crazy 8's to help flush out ideas quickly. Below, you can see some of my early sketches for Farm Fresh.</p>
              <p className="text-center"><img src="/assets/farmfresh/earlySketchesB.png" className="img-fluid" /></p>
              <p className="text-center"><img src="/assets/farmfresh/earlySketches.png" className="img-fluid" /></p>
              <p className="fontLight">Those prototype sketches turned into these mid-fidelity wireframes fairly quickly. I usually enjoy working in mid-fidelity as it allows us to see something that is closer to the final product. Here you can see the initial shopper checkout flow:</p>
              <p className="text-center"><img src="/assets/farmfresh/wireframes1.png" className="img-fluid" /></p>
            </div>

            <div className="container mt-5">
              <h4>VISUAL IDENTITY</h4>
              <p className="fontLight">One of my favorite ways to start protoyping is with an exercise called crazy 8's to help flush out ideas quickly. Below, you can see some of my early sketches for Farm Fresh.</p>
              <p className="text-center mt-5 mb-5"><img src="/assets/farmfresh/colors.png" className="img-fluid" /></p>
              <p className="fontLight">I initially wanted to establish a lighter color palette as reflected in my initial wireframes. However, with the guidance of my mentors at Lambda School I was encouraged to go towards a darker color scheme for contrast and design accessibility. I decided to keep green as the brand color and focused on muted colors for most text, then kept whites and greys for backgrounds. Here's a look at the final style guide with some of the apps main components.</p>
              <div className="d-flex justify-content-between flex-nowrap">
                  <div className="col-4"><img src="/assets/farmfresh/Typography1.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/Components.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/Patterns.png" className="img-fluid" /></div>
              </div>
            </div>


            <div className="container-fluid bg-info text-white mt-5" >
              <div className="row">
                <div className="p-5 mt-4 mb-4" style={{minHeight:'80vh', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <div>
                    <h2 style={{fontSize: 60, textIndent:-5}}>Final Designs</h2>
                    <p className="mt-5">After a series of usability tests I produced twenty iterations before finalizing on these designs. The final shopper checkout flow and the final farmer order management flows are featured in this section.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-4 mb-4">
              <h4>Shopper Checkout Flow</h4>
              <p className="fontLight">This flow features the main sign in page, the shoppers sign in page, the shoppers homepage, the farm search page, the farm search results page, the inventory page,  cart overview page, payment details page, and the final order confirmation page. </p>
              <div className="d-flex justify-content-between flex-wrap ">
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/landingpage.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/signin.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/chooseProduce.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/searchFarms.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/chooseFarm.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/JohnsProduce.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/JohnsCheckout.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/PayOrder.png" className="img-fluid" /></div>
                  <div className="col-4"><img src="/assets/farmfresh/iphone11pro/OrderConfirmed.png" className="img-fluid" /></div>
              </div>
            </div>

            <div className="container mt-4 mb-4">
              <h4>Farmer &lsquo;View Orders&rsquo; Flow</h4>
              <p className="fontLight">This flow features the farmer sign-in page, the farmer homepage, the main orders screen, and an order overview page for an order that is processing.</p>
              <div className="d-flex justify-content-between flex-wrap ">
                  <div className="col-6"><img src="/assets/farmfresh/iphone11pro/SigningIn.png" className="img-fluid" /></div>
                  <div className="col-6"><img src="/assets/farmfresh/iphone11pro/FarmerOptions.png" className="img-fluid" /></div>
                  <div className="col-6"><img src="/assets/farmfresh/iphone11pro/searchFarms.png" className="img-fluid" /></div>
                  <div className="col-6"><img src="/assets/farmfresh/iphone11pro/OrderPaid.png" className="img-fluid" /></div>
              </div>
            </div>

            <div className="container mt-4 mb-4">
              <h4>Reflections and Takeaways</h4>
              <p className="fontLight">With more time I would have enjoyed adding a ‘message’ feature for shopper to feel more connected to their farmers. On the farmers flow I believe it would’ve been useful to add fields for details on inventory for the farmers. I would have also loved to build on top of the ‘future harvests’ idea. Aside from the additions I would like to add, I am confident with the final outcome for the MVP.</p>
            </div>

          </div>
        );
    }
}

export default FarmFresh;
