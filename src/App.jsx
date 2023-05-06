import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import star from '/Star 1.png';
import data from './components/data';

export default function App() {
  const cardComponent = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cardComponent}</section>
    </div>
  );
}
