import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="Container">
       <Weather defaultCity="Berlin" />
          <footer>
          This React weather app was coded by Laura Fenn. The code is{" "}
          <a href="https://github.com/fdlenn/react-weather-app.git" target="_blank" rel=" noopener noreferrer">open-sourced</a> on GitHub and hosted on <a href="https://github.com/fdlenn/react-weather-app.git" target="_blank" rel="noopener noreferrer">Netlify</a>.
          </footer>
    </div>
  </div>
    );
}


