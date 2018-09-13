import React, { Component } from 'react';


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
  //{this.state.icon ? <img id="weather-icon" src={this.state.icon} alt=" weather icon" /> : "no icon"}
  render(){



    return(
    <div style={{'border-style': 'solid', 'border-width': '3px'}}>
        <h3> Weather: <strong>{this.state.weather} </strong><br /></h3>
        <h3> Temperature: <strong>{this.state.temperature || " unknown "}C </strong></h3>
      </div>
    )
  }
}

export default WeatherContainer;
