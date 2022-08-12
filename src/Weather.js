import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
 const [weatherData, setWeatherData] = useState({ ready: false });
 const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
    setWeatherData({
       ready: true, 
       temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        city: response.data.name,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000),
    });
}

function search() {
    let apiKey = "2f6c0570b02743f6b440bec23aa5a698";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();    
  search();
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return ( 
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Search for a city..." 
                    className="form-control" 
                    autoFocus="on" 
                    onChange={handleCityChange} 
                    />
                </div>
                  <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-primary w-100"
                    />
                  </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
    </div>
    );
} else {
    search();
    return "Loading...";
}
}