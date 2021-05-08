import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Components/Card/card.js";
import Map from "./Components/Map/map.js";

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

useEffect(() => {
    const getIp = async () => {
      try {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY_API_KEY}`);
        if(response.ok) {
          const jsonResponse = await response.json();
          setIpAddress(jsonResponse.ip);
          setLat(jsonResponse.location.lat);
          setLng(jsonResponse.location.lng);
          console.log(jsonResponse);
          setIsLoading(false);
          return;
        }
        }
        catch(error){
          console.log(error);
        }
      }
          getIp();

    }, []);


  return (
    <div className="App">
      <header>
        <p>
          What's my IP?
        </p>
      </header>
      <main>
      {isLoading ? (
      <div>
        <h3> Your IP address is... </h3>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>) : (
        <div>
        <Card
        ipAddress={ipAddress}/>
          <Map lat={lat} lng={lng}/>
        </div>
      )}
      </main>
    </div>
  );
}

export default App;
