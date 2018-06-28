import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  css,
  StyleSheet
} from 'aphrodite/no-important';
import Lightbox from 'react-images';
import LazyLoad from 'react-lazy-load';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      containerWidth: window.innerWidth,
      cols : 3
    };

    this.handleResize = this.handleResize.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    // this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }
  componentDidUpdate(){
    if (this._gallery.clientWidth !== this.state.containerWidth){
      console.log(this._gallery.clientWidth + ' componentDidUpdate ' + this.state.containerWidth);
      this.setState({containerWidth: Math.floor(this._gallery.clientWidth)});
    }
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize, false);
  }
  handleResize(e){
    console.log(' handleResize ' );
    this.setState({containerWidth: Math.floor(this._gallery.clientWidth)});
  }
  openLightbox(e) {
    e.preventDefault();
    var key = e.target.getAttribute('data-key');
    if (!key) key = 0;
    else key = parseInt(key);

    // @TODO toggle expand class to sectionDetail

    this.setState({
      currentImage: key,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.photos.length - 1) return;

    this.gotoNext();
  }
  getClosetImg (arr, goal) {
    return arr.reduce(function(prev, curr) {
      var width1 = parseInt(curr.substr(curr.indexOf(' ')));
      var width2 = parseInt(prev.substr(prev.indexOf(' ')));
      if (Math.abs(width1 - goal) < Math.abs(width2 - goal))
      return curr;
      return prev;
    }).split(' ')[0];
  }
  renderMasonry() {
    // console.log(this.props.roomName + " RENDERING: " + this.state.containerWidth);

    let photoPreviewNodes = [], maxWidth = Math.floor(this.state.containerWidth * .75);
    let k=0, src = this.getClosetImg(this.props.photos[k].srcset, maxWidth);

    photoPreviewNodes.push( <div key = {k} className = {`primaryItem ${k} ${css(classes.primaryItem)}`} >
      <a href = '#' data-key = {k} onClick = {this.openLightbox} >
        <img
        src = {src}
        data-key = {k}
        className = {css(classes.source)}
        width = {maxWidth}
        height = "auto"
        alt = {this.props.photos[k].alt}
        />

      </a></div>
    );

    let thumbLength = this.props.photos.length - 1;

    var cols = thumbLength;
    if (thumbLength > 60) cols = Math.floor(thumbLength/9)-1;
    else if (thumbLength > 50) cols = Math.floor(thumbLength/6)-1;
    else if (thumbLength > 40) cols = Math.floor(thumbLength/5)-1;
    else if (thumbLength > 30) cols = Math.floor(thumbLength/4)-1;
    else if (thumbLength > 20) cols = Math.floor(thumbLength/3)-1;
    else if (thumbLength > 10) cols = Math.floor(thumbLength/2)-1;

    var contWidth = Math.floor(this.state.containerWidth - (cols * (this.props.margin * 2)));
    var remainder = thumbLength % cols;
    if (remainder) { // there are fewer photos than cols num in last row
      var lastRowWidth = Math.floor(((this.state.containerWidth / cols) * remainder) - (remainder * (this.props.margin * 2)));
      var lastRowIndex = thumbLength - remainder;
    }

    // loop thru each set of cols num
    // eg. if cols is 3 it will  loop thru 0,1,2, then 3,4,5 to perform calculations for the particular set
    for (var i = 1; i < this.props.photos.length; i += cols) {
      var totalAr = 0, commonHeight = 0, w = maxWidth;

      // get the total aspect ratio of the row
      for (k = i; k < i + cols; k++) {
        if (k == this.props.photos.length) {
          break;
        }
        this.props.photos[k].aspectRatio = this.props.photos[k].width / this.props.photos[k].height;
        totalAr += this.props.photos[k].aspectRatio;
      }

      if (i === lastRowIndex) {
        commonHeight = Math.floor(lastRowWidth / totalAr);
      } else {
        commonHeight = Math.floor(contWidth / totalAr);
      }

      // run thru the same set of items again to give the width and common height
      for (k = i; k < i + cols; k++) {
        if (k == this.props.photos.length) {
          break;
        }

        w = Math.min(maxWidth, commonHeight * this.props.photos[k].aspectRatio);
        src = this.getClosetImg(this.props.photos[k].srcset, w);
        photoPreviewNodes.push(
          <LazyLoad
                key = {k}
                width = {w}
                height = {commonHeight}
                offsetBottom = {600}
                className = {`imageItem ${k}`} >
              <a data-key = {k} href = "#" onClick = {this.openLightbox} >
                <img src = {src}
                data-key = {k}
                className = {css(classes.source)}
                height = {commonHeight}
                width = {w}
                srcSet = {this.props.photos[k].srcset}
                alt = {this.props.photos[k].alt}
                />
              </a>
          </LazyLoad>
        );
      }
    }
    return (
      this.renderGallery(photoPreviewNodes, cols)
    );
  }
  renderGallery(gallery, cols) {
    return ( <div data-cols={cols} className = 'imageGroup' > {gallery} </div>);
  }
  renderCta () {
    return (
        <a href = "#gallery" onClick = {this.openLightbox} >
          <div>
            <img src = {this.props.icon}
            className="sectionIcon" />
            <h3 className="align-self-center">
            {this.props.cta}
            <img src="/images/footer-arrow.png" className="arrowIcon" alt="angle-down" />
            </h3>
          </div>
        </a>
      );
  }
  renderDetailPage() {
    return (
      <section className="sectionDetail p-1">
        <div className="container">
          <div className="row textBlock">
            <img src="images/angle-down.svg" className="arrowIcon" alt="angle-down" data-id="4" />
            <div className="col align-self-center">
              <img src="{this.props.icon}" className="sectionIcon" alt="{this.props.cta}" />
            </div>
            <div className="col align-self-center">
              <h2>{this.props.heading}</h2>
              <p className="lead">{this.props.subheading}</p>
            </div>
            <div className="col-12 sectionImages">
                {this.renderMasonry()}
            </div>
          </div>
        </div>
      </section>
    )
  }
  renderLightBox () {
    return (
      <Lightbox
            heading = {this.props.heading}
            subheading = {this.props.subheading}
            icon = {this.props.icon}
            currentImage = {
              this.state.currentImage
            }
            images = {
              this.props.photos
            }
            isOpen = {
              this.state.lightboxIsOpen
            }
            backdropClosesModal = {
              true
            }
//            onClickImage = {
              //this.handleClickImage
            //}
            onClickNext = {
              this.gotoNext
            }
            onClickPrev = {
              this.gotoPrevious
            }
            onClickThumbnail = {
              this.gotoImage
            }
            onClose = {
              this.closeLightbox
            }
            showThumbnails = {
              this.props.showThumbnails
            }
            />
    );
  }
  render() {
      return (
      <div>
        {this.renderCta() }
        {this.renderLightBox() }
      </div>
      );
    }
  }

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  photos: function(props, propName, componentName) {
    return PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        alt: PropTypes.string,
        srcset: PropTypes.array,
        sizes: PropTypes.array
      })
    ).isRequired.apply(this, arguments);
  },
  openLightbox:PropTypes.func,
  cols: PropTypes.number,
  margin: PropTypes.number,
  icon: PropTypes.string,
  cta: PropTypes.string,
  heading: PropTypes.string,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
  roomName:PropTypes.string
};
Gallery.defaultProps = {
  cols: 1,
  margin: 5,
  cta:'My cta',
  icon:'images/footer-wireframe.png',
  heading:'My header',
  subheading:'My subheading',
  roomName:'test room',
  openLightbox:function(e)  {
    if(e) e.preventDefault();
  }
}

const gutter = {
  small: 2,
  large: 4,
};
const classes = StyleSheet.create({
  gallery: {
    width:'100%'
  },

  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'inline-block',
    lineHeight: 0,
    marginRight: gutter.small,
    marginBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      marginRight: gutter.large,
      marginBottom: gutter.large,
    },
  },

  // actual <img />
  source: {
    border: 0,
    display: 'inline-block',
    maxWidth: '100%'
  }

});

export default Gallery;
