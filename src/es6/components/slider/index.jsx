import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      translateValue: 0,
      index: 0
    }
  }

  // @ERROR > 5:1  error  componentWillReceiveProps is deprecated since React 16.3.0, use UNSAFE_componentWillReceiveProps instead, see https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops  react/no-deprecated
  unsafe_componentwillreceiveprops(nextProps) {
    const { index } = this.state;
    if (nextProps.images !== undefined) {
      const translateValue = -this.slideWidth() * nextProps.index;
      console.log('unsafe_componentwillreceiveprops', nextProps.index, translateValue);
      this.setState({ images: nextProps.images, index: nextProps.index, translateValue })
    }
  }

  slideWidth() {
    return document.querySelector('.slide-view').clientWidth
  }

  render() {
    return (
      <div className='slide-view' data-total-images={this.state.images.length}>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            this.state.images.map((image, idx) => {
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
  images: PropTypes.array,
  translateValue : PropTypes.number
};
Slider.defaultProps = {
  index:1,
  images : [],
  translateValue : 0
}

export default Slider;
