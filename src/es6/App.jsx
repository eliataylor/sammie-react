import React, { Component } from 'react';
import Modal from './components/modal';
import Cta from './components/cta';

class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: window['portfolio'],
      showModal: false,
      sectionObj : {}
    };
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
        <div id="master" className="d-flex flex-column align-items-center justify-content-space-around">
          <header className="mt-3 mb-3">
                <h1>
                  <span className="sr-only">Samanta Khalil Taylor</span>
                  <img src="/images/logo.png" className="logo" />
                </h1>
          </header>
          <div className="siteDesc container mt-4 mb-4 flex-grow-1">
            <h2>
              <span className="kissme" >easy on the eyes </span>
              <span className="line2">is my design motto</span>
            </h2>
            <p className="line3">I enjoy building pretty, clean, easy to read, and user friendly designs + layouts.</p>
          </div>
          <div className="container mt-4 mb-4 flex-grow-1">
            <div className="row justify-content-between align-items-center" >
              {ctas}
            </div>
          </div>
          <footer className="mt-5 mb-5">
            <p>415-300-0834 &raquo; get@sammietaylor.com</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
