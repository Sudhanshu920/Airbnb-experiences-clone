import React from 'react';
import pic from '/Group 77.png';

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={pic} alt="pic" className="hero-pic" />
      <div className="hero-heading">Online Experiences</div>
      <div className="hero-paragraph">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </div>
    </div>
  );
}
