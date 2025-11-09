import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = ({ onNext }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0c10] via-[#0a0c10] to-[#0e0b14] text-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to add romantic vibe, does not block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.25),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.25),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-violet-300 drop-shadow-[0_2px_12px_rgba(236,72,153,0.35)]">
          Welcome to Our Little Universe
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-pink-100/90">
          A romantic journey crafted just for you — soft lights, warm beats, and a heart that
          whispers your name with every click.
        </p>

        <button
          onClick={onNext}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300 animate-pulse"
        >
          Click Here
        </button>

        {/* Floating sparkles */}
        <div className="pointer-events-none absolute inset-0 -z-[0]">
          <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-pink-500/20 blur-2xl" />
          <div className="absolute right-[15%] top-[35%] h-16 w-16 rounded-full bg-fuchsia-500/20 blur-xl" />
          <div className="absolute left-[25%] bottom-[20%] h-28 w-28 rounded-full bg-rose-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
