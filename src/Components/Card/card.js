import React, { useState, useEffect } from 'react';
import './card.css';

export default function Card({ ipAddress }) {
  const [info, setInfo] = useState('');

useEffect(() => {
    const getInfo = async () => {
      try {
        const code = 'de';
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
        if(response.ok) {
          const jsonResponse = await response.json();
          setInfo(jsonResponse.name);
          return;
        }
        }
        catch(error){
          console.log(error);
        }
      }
          getInfo();

    }, []);


  return (
    <div>
      <h3> {ipAddress} </h3>
    </div>
)
};
