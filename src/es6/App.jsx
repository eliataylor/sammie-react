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
      <div className="row justify-content-between align-items-center">
        {ctas}

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
      </div>
    );
  }
}

export default App;
