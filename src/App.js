import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./Components/Card/card.js";

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const getIp = async () => {
      try {
      const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPFY_API_KEY}`);
        if(response.ok) {
          const jsonResponse = await response.json();
          setIpAddress(jsonResponse.ip);
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
      <header className="App-header">
        <p>
          What's my IP?
        </p>
        <Card
        ipAddress={ipAddress} isLoading={isLoading}/>
      </header>
    </div>
  );
}

export default App;
