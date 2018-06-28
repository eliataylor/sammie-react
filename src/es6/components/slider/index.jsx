import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      translateValue: 0,
      index: 0
    }
  }

  /*
  @ERROR > 5:1  error  componentWillReceiveProps is deprecated since React 16.3.0, use UNSAFE_componentWillReceiveProps instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops  react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { index } = this.state;
    if (nextProps.images !== undefined) {
      const translateValue = -this.slideWidth() * nextProps.index;
      console.log(nextProps.index, translateValue);
      this.setState({ images: nextProps.images, index: nextProps.index, translateValue })
    }
  }
  */

  slideWidth() {
    return document.querySelector('.slide-view').clientWidth
  }

  render() {
    const { images, translateValue } = this.state;

    return (
      <div className='slide-view'>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            images.map((image, idx) => {
              return (
                <div key={idx} className='image-container'>
                  <div style={{ backgroundImage: (`url('`+image+`')`)}} className='portfolio' />
                  {/* <img src={image} className='portfolio'/> */}
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
  images: PropTypes.object,
};
Slider.defaultProps = {
  index:1,
  images : [],
}

export default Slider;
