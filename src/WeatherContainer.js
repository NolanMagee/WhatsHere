import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class WeatherContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      weather: null,
      icon: null,
      temperature: null
    }
  }
  findWeather(){
    let weatherURL = "https://fcc-weather-api.glitch.me/api/current?";
    fetch( weatherURL + "lat=" + this.props.lat + "&lon=" + this.props.long)
    .then(response=>response.json())
    .then((response)=>{

        this.weather= response.weather[0].description;
        this.icon = response.weather[0].icon;
        this.temperature= response.main.temp;

    })
    .catch((error)=>{
      console.log("Weather API error: " + error.message);
    })
  }

  componentDidMount(){
    this.findWeather();
  }

  componentWillUpdate(){
    this.findWeather();
  }


  render(){
    return(
    <div>
        The weather at the selected location is {this.weather} <br />
        It is currently {this.temperature || " unknown "}C <br />
        <img id="weather-icon" src={this.icon} alt=" weather icon" />
      </div>
    )
  }
}

export default WeatherContainer;
