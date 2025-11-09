import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import LoveHeading from './components/LoveHeading';
import LovePoem from './components/LovePoem';
import LoveQuote from './components/LoveQuote';

function App() {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((s) => Math.min(s + 1, 3));

  return (
    <div className="font-['Inter',_'system-ui',_sans-serif]">
      {step === 0 && <HeroSection onNext={goNext} />}
      {step === 1 && <LoveHeading onNext={goNext} />}
      {step === 2 && <LovePoem onNext={goNext} />}
      {step === 3 && <LoveQuote />}
    </div>
  );
}

export default App;
