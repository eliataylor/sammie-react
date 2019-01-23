import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateValue: 0,
      index: 0
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.images.length > 0 && nextProps.index !== this.props.index) {
      this.setState({
        index:nextProps.index,
        translateValue : -1 * (this.slideWidth() * this.props.index)
      })
    }
  }

  slideWidth() {
    return document.querySelector('.slide-view').clientWidth;
  }

  render() {
    return (
      <div className='slide-view' data-prop-index={this.props.index} data-state-index={this.state.index} >
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            this.props.images.map((image, idx) => {
              return (
                <div key={idx} className='image-container'>
                  <span style={{ backgroundImage: (`url('`+image.src+`')`)}}  className="slide-img">
                  <img src={image.src} srcSet={image.srcset}  />
                  </span>
                  { (typeof image.desc == 'string') ? <span className='slide-desc'>{image.desc}</span> : '' }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

Slider.displayName = 'Slider';
Slider.propTypes = {
  index:PropTypes.number,
  images: PropTypes.array,
  translateValue : PropTypes.number
};
Slider.defaultProps = {
  index:0,
  images : [],
  translateValue : 0
}

export default Slider;
