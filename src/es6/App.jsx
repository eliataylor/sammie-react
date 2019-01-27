import React, { Component } from 'react';
import Modal from './components/modal';
import Cta from './components/cta';

import '../scss/master.scss';

import Data from '../data/project-desc.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      section : ''
    };
    this.endModal = this.endModal.bind(this);
  }

  handleExpertise(e) {
    let type = e.currentTarget.value;
    this.setState({
      section:type
    });
    this.setState({
      showModal: true
    });
  }

  endModal() {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div>
      {
        this.state.showModal ? <Modal
          heading = {Data['expertise'][this.state.section].heading}
          subheading = {Data['expertise'][this.state.section].subheading}
          images = {Data['expertise'][this.state.section].images}
          hide={!this.state.showModal}
          endModal={this.endModal}
        /> : ''
      }
        <div id="master" >
          <div className="container-fluid">
            <div className='pt-5 row'>
              <div className='col-md-8 col-sm-12 pl-5'>
                  <h1 className='mb-0'>SAM</h1>
                  <h2 className='bgBrush mt-0'>designs</h2>
                  <br />

                  <div className='philosophy mt-5 mb-5'>
                  <h3>Philosophy:</h3>
                  <p>Create normalcy out of chaos<br /> by clearly communicating<br /> ideas through the organizing<br /> and manipulation of words and images.</p>
                  </div>

                  <div className='mb-3'><button onClick={(e) => this.handleExpertise(e)} value='design' className='expertise'>Designs</button></div>
                  <div><button onClick={(e) => this.handleExpertise(e)} value='ux' className='expertise'>UI/UX</button></div>

              </div>
              <footer className='col-md-4 col-sm-12 text-right pr-5'>
                  <h4>Contact:</h4>
                  <br />
                  <h5>get@sammietaylor.com</h5>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
