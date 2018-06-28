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
      <div className={className} onMouseDown={this.props.endModal} >

        <div className='modal-view fullBG p-2' onMouseDown={e => e.stopPropagation()}>
          <p>
            <span className="float-right" onMouseDown={this.props.endModal}><img src="/images/angle-down.png" height="20" /></span>
            <img className="modalIcon float-left" src={this.props.icon} />
            <span className='modal-heading-text'>{this.props.heading}</span><br />
            <span className='modal-text'>{this.props.subheading}</span>
          </p>
          <div className='portfolio-view' data-index={this.state.index}>

            <a className='arrow-left mr-1' onClick={() => {
              if (this.state.index > 0) {
                this.setState({index: this.state.index - 1})
              } else {
                this.setState({index: this.props.images.length -1})
              }
            }}>
              <img src='/images/arrow_left.png' alt='left arrow' className='arrow-button' />
            </a>

            <div className='slider-container' data-index={this.state.index} >
              <Slider
                images = {this.props.images}
                index = {this.state.index}
              />
            </div>

            <a className='arrow-right ml-1' onClick={() => {
              if (this.state.index < this.props.images.length - 1) {
                this.setState({ index: this.state.index + 1 })
              } else {
                this.setState({ index: 0 })
              }
            }}>
              <img src='/images/arrow_right.png' alt='left arrow' className='arrow-button' />
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
