import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorksSection from '../components/HowItWorksSection';
import Coverage from '../components/Coverage';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorksSection />
      <Coverage />
    </div>
  );
}