import React from 'react'
import ReactDOM from 'react-dom'
import Gallery from './gallery'
import Collapsible from 'react-collapsible';
import VisibilitySensor from 'react-visibility-sensor';

// why is all this onload stuff necessary. doesn't react handle this?
// without document.getElementById(photo) it throws: "_registerComponent(...): Target container is not a DOM element."
for (let photo in window['portfolio']) {
  if (document.getElementById(photo)) {
    var el = document.getElementById(photo),
    obj = window['portfolio'][photo];

    ReactDOM.render(
        <Gallery
        photos = {obj.images}
        roomName = {photo}
        openLightbox = {true}
        showThumbnails = {false}
        heading = {obj.heading}
        subheading = {obj.subheading}
        cta = {obj.cta}
        icon = {obj.icon}
         />
    , el);
  }
}
