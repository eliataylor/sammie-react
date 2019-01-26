import React, { Component } from 'react';

import Slider from '../slider';
import PropTypes from 'prop-types';
//import arrow_left from '../../../images/arrow_left.png';
//import arrow_right from '../../../images/arrow_right.png';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: props.heading,
      subheading : props.subheading,
      images : props.images
    }
  }

  componentDidUpdate(props) {
    console.log('modal props', props);
    if (props.heading != this.state.heading) {
      this.setState({
        heading: props.heading,
        subheading : props.subheading,
        images : props.images
      });
    }
  }

  render() {
    let className = 'custom-modal ' + (this.props.hide ? 'hidden' : 'visible expand');

    return (
      <div className={className} onClick={this.props.endModal} >
        <div className='modal-view fullBG p-2' onClick={e => e.stopPropagation()}>
          <p>
            <span className="float-right" onClick={this.props.endModal}><img src="/images/collapse-424953.png" height="20" className="arrow-button" /></span>

            <span className='modal-heading-text'>{this.state.heading}</span><br />
            <span className='modal-text'>{this.state.subheading}</span>
          </p>
          <Slider heading ={this.state.heading}
                  subheading = {this.state.subheading}
                  images={this.state.images} />
        </div>
      </div>
    )
  }
}

Modal.displayName = 'Modal';
Modal.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  images: PropTypes.array,
  endModal : PropTypes.func,
  hide : PropTypes.bool
};

Modal.defaultProps = {
  heading:'',
  subheading:'',
  images : [],
  endModal:function(e)  {
    if(e) e.preventDefault();
  },
  hide: false
}


export default Modal;
