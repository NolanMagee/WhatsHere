//from https://gist.github.com/mthorry/9885ac335784d0b7cf380deca3924c46#file-appcontainer-js
// Thanks!
//tutorial from here: https://medium.com/front-end-hacking/simplified-google-maps-api-in-a-react-app-46981441d2c9

import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer';
import NewsContainer from './NewsContainer';
import WeatherContainer from './WeatherContainer';

class WhatsHere extends Component{
  constructor(props){
    super(props);
    this.state={
      lat : null,
      lng : null,
      country: null,
      city: null
    }
    //grabs Location information from latitude/longitude
    this.geocoder = new this.props.google.maps.Geocoder();
  }

  getCityCountry(results){
    let i = results.address_components.length;

  }

  getLatLng=(event)=>{
    let lat = event.latLng.lat();
    let lng = event.latLng.lng();
    let country;
    let city;
    let latLng = {lat: lat, lng: lng};
    //Use event.latLng and put it into Reverse Geocode api (this.props.google.maps.Geocoder().geocode)
    //use let geocoder = new this.props.google.maps.Geocoder , then geocoder.geocode('location':latLng)
    //do .then (this.setState) and set lat,lng, country, PoI all at same time
    this.geocoder.geocode({'location': latLng}, (results,status)=>{
      if (status === 'OK'){
        country = results[results.length-1].formatted_address; //re-do this to use same method as city, e.g. .includes(country)
        console.log("Country: ", country);

        city = results[0].address_components.find(function(addr){
          return (addr.types.includes("locality") || addr.types.includes("sublocality"));
          });

        if (city != null){
          city = city.long_name;
        }
        else(city= "No city here");

        console.log("City: ", city);
        this.setState({country: country, city: city});
      }


      else {
        console.log("ERROR: ", status , " Click on land, please!");
      }

    });

    this.setState({lat: lat, lng: lng});
    //alert("Latitude :" + this.state.lat + " Longitude: " + this.state.long);
  }

  render(){
    return(<div>
      <h1>"What's Going on Here?"</h1>
      <h3> Using Google Maps API and React </h3>
      <MapContainer google={this.props.google} getLatLng={this.getLatLng} lat={this.state.lat} lng={this.state.lng} />
      <WeatherContainer lat={this.state.lat} lng={this.state.lng} />
      <br />
      <NewsContainer city={this.state.city} country={this.state.country}/>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCkVz1YghzlOOPOz9Hs8oOsNBllvDJW2Ls'
})(WhatsHere);
