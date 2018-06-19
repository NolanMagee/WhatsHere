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
