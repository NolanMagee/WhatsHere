//from https://gist.github.com/mthorry/9885ac335784d0b7cf380deca3924c46#file-appcontainer-js
// Thanks!
//tutorial from here: https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9

import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer';

class WhatsHere extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<div>
      <h1>"What's Going on Here?"</h1>
      <h3> Using Google Maps API and React </h3>
      <MapContainer google={this.props.google} />
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkVz1YghzlOOPOz9Hs8oOsNBllvDJW2Ls'
})(WhatsHere);
