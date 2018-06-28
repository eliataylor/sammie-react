import React, { Component } from 'react';
import './modal.css';

import Slider from '../slider';
import PropTypes from 'prop-types';
//import arrow_left from '../../../images/arrow_left.png';
//import arrow_right from '../../../images/arrow_right.png';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: '',
      subheading: '',
      icon: '',
      images: [],
      index: 0,
    }
  }

  render() {
//    let { heading, subheading, index, icon, images } = this.state;

    let className = 'custom-modal ' + (this.props.hide ? 'hidden' : 'visible');

    return (
      <div className={className} onMouseDown={this.props.endModal}>

        <div className='modal-view' onMouseDown={e => e.stopPropagation()}>
          <div className='modal-text-container'>
            <img src={this.state.icon} />
            <h2 className='modal-heading-text'>{this.state.heading}</h2>
            <h3 className='modal-text'>{this.state.subheading}</h3>
          </div>
          <div className='portfolio-view'>
            <a className='arrow-left' onClick={() => {
              if (this.state.index > 0) {
                this.setState({index: this.state.index - 1})
              }
            }}>
              <img src='/images/arrow_left.png' alt='left arrow' className='arrow-button' />
            </a>

            <div className='slider-container'>
              <Slider
                images={this.state.images}
                index={this.state.index}
              />
            </div>

            <a className='arrow-right' onClick={() => {
              if (this.state.index < this.state.images.length - 1) {
                this.setState({ index: this.state.index + 1 })
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
  images: PropTypes.object,
  endModal : PropTypes.bool,
  hide : PropTypes.bool,
};
Modal.defaultProps = {
  onPress:function(e)  {
    if(e) e.preventDefault();
  },
  icon:'images/footer-wireframe.png',
  cta:'My cta',
  heading:'My header',
  subheading:'My subheading',
  images : [],
  endModal : true,
  hide: false
}


export default Modal;
