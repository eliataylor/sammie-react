import React, { Component } from 'react';
import Modal from './components/modal';
import Cta from './components/cta';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      index: 0,
      sectionObj : {}
    };
  }

  openModal(idx) {
    this.setState({
      showModal: true,
      index: idx
    });
  }

  endModal() {
    this.setState({
      showModal: false,
    })
  }

  onOpenModal(index) {
    this.setState({
      sectionObj:window['portfolio'][index]
    });
  }

  render() {
    let ctas = [];
    for (let photo in window['portfolio']) {
      let obj = window['portfolio'][photo];
      ctas.push(
        <div className="sectionCta p-1 mt-1 mb-2 col-md-2 col-sm-6">
          <Cta
          {...obj}
          onPress={() => this.onOpenModal(obj.tabindex)}
           />
        </div>
      );
    }

    return (
      <div className="row justify-content-between align-items-center">
        {ctas}

        <Modal
          {...this.state.sectionObj}
          hide={!this.state.showModal}
          endModal={this.endModal.bind(this)}
        />
      </div>
    );
  }
}

export default App;
