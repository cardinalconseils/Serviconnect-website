import React from 'react';
import Hero from './Hero';
import Services from './Services';
import HowItWorks from './HomeHowItWorks';
import Coverage from './Coverage';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Coverage />
    </div>
  );
}