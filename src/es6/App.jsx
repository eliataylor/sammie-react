import React, { Component } from 'react';
import Modal from './components/modal';
import Cta from './components/cta';
import '../scss/master.scss';

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
            <div className='row'>
              <div className='col-8'>
                  <h1>SAM</h1>
                  <h2 className='bgBrush'>designs</h2>

                  <h3>Philosophy:</h3>
                  <p>Create normalcy out of chaos by clearly communicating ideas through the organizing and manipulation of words and images.</p>

                  <div><button className='expertise'>Designs</button></div>
                  <div><button className='expertise'>UI/UX</button></div>

              </div>
              <div className='col-4'>
                  <h4>Contact:</h4>
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
