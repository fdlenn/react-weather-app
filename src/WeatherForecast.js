import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}

function load() {
    let apiKey = "2f6c0570b02743f6b440bec23aa5a698";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
}

if (loaded) {
    return (
        <div className="WeatherForecast"> 
            <div className="row mt-3">
            {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                </div>
                      );
                    } else {
                        return null;
                    }
                  })}
            </div>
        </div>
        );
    } else {
        load();

    return null;
    }
}



