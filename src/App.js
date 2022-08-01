import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return <div className="App">
    <div className="Container">
    <h1>Weather App</h1>
    <Weather />
    <footer>
      This porject was coded by Laura Fenn and is{" "}
    <a href="https://github.com/fdlenn/react-weather-app.git" target="_blank">open-sourced</a>
    </footer>
    </div>
    </div>
}


