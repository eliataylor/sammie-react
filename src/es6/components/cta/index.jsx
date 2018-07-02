import React, { Component } from 'react';
//import linkBtn from '../../../../public/images/footer-arrow.png';
import PropTypes from 'prop-types';

class Cta extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <a href = {"#"+this.props.cta.toLowerCase()} onClick = {this.props.onPress} >
        <div>
          <img src={this.props.icon} className="sectionIcon" />
          <h3 className="align-self-center">
          {this.props.cta}
          <img src='/images/arrow-tr-424953.png' className="arrowIcon" alt="angle-down" />
          </h3>
        </div>
      </a>
    );
  }
}

Cta.displayName = 'Cta';
Cta.propTypes = {
  onPress:PropTypes.func,
  icon: PropTypes.string,
  cta: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string
};
Cta.defaultProps = {
  onPress:function(e)  {
    if(e) e.preventDefault();
  },
  icon:'/images/footer-wireframe.png',
  cta:'My cta',
  heading:'My header',
  subheading:'My subheading',
}

export default Cta;
