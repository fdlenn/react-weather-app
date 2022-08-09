import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="Container">
      <h1>Weather App</h1>
       <Weather defaultCity="New York" />
          <footer>
          This Weather App was coded by Laura Fenn and is{" "}
          <a href="https://github.com/fdlenn/react-weather-app.git" target="_blank" rel="noreferrer">open-sourced</a> on GitHub and hosted on <a href="https://github.com/fdlenn/react-weather-app.git" target="_blank" rel="noreferrer">Netlify.</a>.
          </footer>
    </div>
  </div>
    );
}


