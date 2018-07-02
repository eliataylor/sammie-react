import React, { Component } from 'react';
//import './modal.css';

import Slider from '../slider';
import PropTypes from 'prop-types';
//import arrow_left from '../../../images/arrow_left.png';
//import arrow_right from '../../../images/arrow_right.png';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index:0
    };
  }

  render() {
    let className = 'custom-modal ' + (this.props.hide ? 'hidden' : 'visible expand');

    return (
      <div className={className} onClick={this.props.endModal} >

        <div className='modal-view fullBG p-2' onClick={e => e.stopPropagation()}>
          <p>
            <span className="float-right" onClick={this.props.endModal}><img src="/images/collapse-424953.png" height="20" className="arrow-button" /></span>
            <img className="modalIcon float-left" src={this.props.icon} />
            <span className='modal-heading-text'>{this.props.heading}</span><br />
            <span className='modal-text'>{this.props.subheading}</span>
          </p>
          <div className='portfolio-view flex-grow-1' data-index={this.state.index}>

            <a onClick={() => {
              if (this.state.index > 0) {
                  this.setState({index: this.state.index - 1})
                } else {
                  this.setState({index: this.props.images.length -1 })
                }
              }}>
              <img src='/images/arrow-east-424953.png' alt='left arrow' className='arrow-west arrow-button' />
            </a>

            <div className='slider-container' data-index={this.state.index} >
              <Slider
                images = {this.props.images}
                index = {this.state.index}
              />
            </div>

            <a onClick={() => {
              if (this.state.index < this.props.images.length - 1) {
                this.setState({ index: this.state.index + 1 })
              } else {
                this.setState({ index: 0 })
              }
            }}>
              <img src='/images/arrow-east-424953.png' alt='right arrow' className='arrow-east arrow-button' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

Modal.displayName = 'Modal';
Modal.propTypes = {
  onPress:PropTypes.func,
  icon: PropTypes.string,
  cta: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  images: PropTypes.array,
  endModal : PropTypes.func,
  hide : PropTypes.bool
};

Modal.defaultProps = {
  onPress:function(e)  {
    if(e) e.preventDefault();
  },
  icon:'images/footer-wireframe.png',
  cta:'',
  heading:'',
  subheading:'',
  images : [],
  endModal:function(e)  {
    if(e) e.preventDefault();
  },
  hide: false
}


export default Modal;
