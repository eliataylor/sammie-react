import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      heading: props.heading,
      subheading : props.subheading,
      images : props.images
    }
  }

  componentDidUpdate(props) {
    if (props.heading != this.state.heading) {
      this.setState({
        heading: props.heading,
        subheading : props.subheading,
        images : props.images
      });
    }
  }

  slideWidth() {
    return (document.getElementById('slide-view')) ? document.getElementById('slide-view').clientWidth : 300;
  }

  render() {
    var translateValue = -1 * (this.slideWidth() * this.state.index);

    return (

      <div className='portfolio-view flex-grow-1' data-index={this.state.index}>

        <a onClick={() => {
          if (this.state.index > 0) {
              this.setState({index: this.state.index - 1})
            } else {
              this.setState({index: this.state.images.length -1 })
            }
          }}>
          <img src='/images/arrow-east-424953.png' alt='left arrow' className='arrow-west arrow-button' />
        </a>

        <div className='slider-container' data-index={this.state.index} >
          <div id='slide-view' className='slide-view' data-prop-index={this.state.index} data-state-index={this.state.index} >
            <div className="slider-wrapper"
              style={{
                transform: 'translateX(' + translateValue + 'px)'
              }}>
              {
                this.state.images.map((info, idx) => {
                  return (
                    <div key={idx} className='image-container'>
                      <div className='slide-title'>{info.heading}</div>

                      {
                        info.image.map((image, idx2) => {
                          return (
                            <div key={idx2} style={{ backgroundImage: (`url('`+image.src+`')`)}}  className="slide-img">
                              <img src={image.src} srcSet={image.srcset}  />
                            </div>
                          )
                        })
                      }

                      <div className='slide-desc'>{info.subheading}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <a onClick={() => {
          if (this.state.index < this.state.images.length - 1) {
            this.setState({ index: this.state.index + 1 })
          } else {
            this.setState({ index: 0 })
          }
        }}>
          <img src='/images/arrow-east-424953.png' alt='right arrow' className='arrow-east arrow-button' />
        </a>

      </div>
    )
  }
}

Slider.displayName = 'Slider';
Slider.propTypes = {
  index:PropTypes.number,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  images: PropTypes.array
};
Slider.defaultProps = {
  index:0,
  heading:'',
  subheading:'',
  images : []
}

export default Slider;
