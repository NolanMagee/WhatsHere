//taken from https://gist.github.com/mthorry/49aa272c1c189126d3a8bf4c2189f9c4
// Thanks!

import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {
  constructor(props){
    super(props);
    this.zoom=11;
  }


  componentDidMount(){
    this.loadMap();
  }


  componentDidUpdate() {
    this.zoom = this.map.getZoom();
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const google = this.props.google; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node
      let center;

      if (this.props.lat && this.props.lng ){
        center= {lat: this.props.lat, lng: this.props.lng};

      }
      else{
        center= {lat: 40.7485722, lng: -74.0068633}; //New York City
      }
      const mapConfig = Object.assign({}, {
        center: center, // sets center of google map to NYC.
        zoom: this.zoom, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      //console.log(this.props.lat);
      //console.log(this.props.long);

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      google.maps.event.addListener(this.map, 'click', this.props.getLatLng);

    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}
