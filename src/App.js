import React, { useState, useEffect } from "react";
import "./App.css";
//import Card from "./Components/Card/card.js";
import Map from "./Components/Map/map.js";
import MediaCard from "./Components/Showcard/showcard.js";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState("");

  useEffect(() => {
    const getIp = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY_API_KEY}`
        );
        if (response.ok) {
          const jsonResponse = await response.json();
          setIpAddress(jsonResponse.ip);
          setLat(jsonResponse.location.lat);
          setLng(jsonResponse.location.lng);
          setCode(jsonResponse.location.country);
          setCity(jsonResponse.location.city);
          console.log(jsonResponse);
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getIp();
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      try {
        console.log(code);
        const response = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );
        if (response.ok) {
          const jsonResponse = await response.json();
          setCountry(jsonResponse.name);
          //setTimeZone(jsonResponse.timezones);
          setFlag(jsonResponse.flag);
          console.log(jsonResponse);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, [code]);

  return (
    <div className="App">
      <header>
        <i className="fa fa-map-marker"></i>
        <p>What's my IP?</p>
      </header>
      <main>
        {isLoading ? (
          <div>
            <h3> Your IP address is... </h3>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        ) : (
          <div>
            <MediaCard
              id="MediaCard"
              ipAddress={ipAddress}
              flag={flag}
              country={country}
              city={city}
            />
            <Map id="Map" lat={lat} lng={lng} />
          </div>
        )}
      </main>
      <footer className="footer">Copyright</footer>
    </div>
  );
}

export default App;
