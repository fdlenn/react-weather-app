import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
console.log(response.data);
    }
    let apiKey = "2f6c0570b02743f6b440bec23aa5a698";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return (
<div className="WeatherForecast"> 
    <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">Thur</div> 
            <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temp-max">19°</span>
                <span className="WeatherForecast-temp-min">10°</span>
            </div>  
        </div>
        <div className="col">
            <div className="WeatherForecast-day">Thur</div> 
            <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temp-max">19°</span>
                <span className="WeatherForecast-temp-min">10°</span>
            </div>  
        </div>
        <div className="col">
            <div className="WeatherForecast-day">Thur</div> 
            <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temp-max">19°</span>
                <span className="WeatherForecast-temp-min">10°</span>
            </div>  
        </div>
        <div className="col">
            <div className="WeatherForecast-day">Thur</div> 
            <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temp-max">19°</span>
                <span className="WeatherForecast-temp-min">10°</span>
            </div>  
        </div>
        <div className="col">
            <div className="WeatherForecast-day">Thur</div> 
            <WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures"> 
                <span className="WeatherForecast-temp-max">19°</span>
                <span className="WeatherForecast-temp-min">10°</span>
            </div>  
        </div>
    </div>
</div>
);
}