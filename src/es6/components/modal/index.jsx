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
      index:0,
      images : this.props.images
    };
  }

  render() {
    let className = 'custom-modal ' + (this.props.hide ? 'hidden' : 'visible expand');

    return (
      <div className={className} onMouseDown={this.props.endModal} data-total-images={this.props.images.length}>

        <div className='modal-view fullBG' onMouseDown={e => e.stopPropagation()}>
          <div className='row'>
            <div className="col-4">
              <img className="img-fluid" src={this.props.icon} />
            </div>
            <div className="col-8">
              <h2 className='modal-heading-text'>{this.props.heading}</h2>
              <h3 className='modal-text'>{this.props.subheading}</h3>
            </div>
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
                images={this.props.images}
                index={this.state.index}
              />
            </div>

            <a className='arrow-right' onClick={() => {
              if (this.state.index < this.props.images.length - 1) {
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
  images: PropTypes.array,
  endModal : PropTypes.func,
  hide : PropTypes.bool
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
  endModal:function(e)  {
    if(e) e.preventDefault();
  },
  hide: false
}


export default Modal;
