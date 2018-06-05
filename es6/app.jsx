import React from 'react'
import ReactDOM from 'react-dom'
import Gallery from './gallery'
import Collapsible from 'react-collapsible';
import VisibilitySensor from 'react-visibility-sensor';

if (window['portfolio']) {
  for (let photo in window['portfolio']) {
    ReactDOM.render(
      <Collapsible trigger={photo}>
         <Gallery photos = {
          window['portfolio'][photo]
        } roomName = {photo}  showThumbnails /> , document.getElementById(photo));
      </Collapsible>
    );
  }
}
