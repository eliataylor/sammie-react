import React, { Component } from 'react';
import Modal from './components/modal';
import Cta from './components/cta';
import '../scss/master.scss';

import Data from '../data/project-desc.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: window['portfolio'],
      showModal: false,
      sectionObj : {}
    };
  }

  componentDidMount() {
    if (!this.state.portfolio) {
      fetch("/data/project-desc.json")
//      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({portfolio:result.data});
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  openModal(idx) {
    this.setState({
      showModal: true,
      sectionObj:this.state.portfolio[idx]
    });
  }

  endModal() {
    this.setState({
      showModal: false,
    })
  }

  render() {
    let ctas = [];
    for (let photo in this.state.portfolio) {
      let obj = this.state.portfolio[photo];
      ctas.push(
        <div key={photo} className="sectionCta p-1 mt-1 mb-2 col-md-2 col-sm-6">
          <Cta
          {...obj}
          onPress={() => this.openModal(photo)}
           />
        </div>
      );
    }

    return (
      <div>
        <span id="fullBG" ></span>
        <Modal
          icon = {this.state.sectionObj.icon}
          cta = {this.state.sectionObj.cta}
          heading = {this.state.sectionObj.heading}
          subheading = {this.state.sectionObj.subheading}
          images = {this.state.sectionObj.images}
          tabindex = {this.state.sectionObj.tabindex}
          hide={!this.state.showModal}
          endModal={this.endModal.bind(this)}
        />
        <div id="master" >
          <div className="container-fluid">
            <div className='pt-5 row'>
              <div className='col-8 pl-5'>
                  <h1 className='mb-0'>SAM</h1>
                  <h2 className='bgBrush mt-0'>designs</h2>

                  <h3 className='mt-5'>Philosophy:</h3>
                  <p className='mb-5' >Create normalcy out of chaos<br /> by clearly communicating<br /> ideas through the organizing<br /> and manipulation of words and images.</p>

                  <div className='mb-3'><button className='expertise'>Designs</button></div>
                  <div><button className='expertise'>UI/UX</button></div>

              </div>
              <div className='col-4 text-right pr-5'>
                  <h4>Contact:</h4>
                  <br />
                  <h5>get@sammietaylor.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
