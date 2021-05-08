import React from 'react';
import './card.css';

export default function Card({ipAddress, isLoading}) {
  return (
    <div>
    {isLoading ? (
    <div>
      <h3> Your IP address is... </h3>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    </div>) : (
      <div>
      <h2>{ipAddress}</h2>
      </div>
    )}
  </div>
)
};
