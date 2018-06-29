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
    fetch( weatherURL + "lat=" + this.props.lat + "&lon=" + this.props.lng)
    .then(response=>response.json())
    .then((response)=>{
        this.setState({
        weather: response.weather[0].description,
        icon: response.weather[0].icon,
        temperature: response.main.temp
      });
    })
    .catch((error)=>{
      console.log("Weather API error: " + error.message);
    })
  }

  componentDidMount(){
    this.findWeather();
  }

  componentDidUpdate(prevProps){
    if (prevProps.lat !== this.props.lat && prevProps.lng !== this.props.lng){
      this.findWeather();
    }
  }

  render(){



    return(
    <div>
        The weather at the selected location is {this.state.weather} <br />
        It is currently {this.state.temperature || " unknown "}C <br />
        <img id="weather-icon" src={this.state.icon} alt=" weather icon" />
      </div>
    )
  }
}

export default WeatherContainer;
