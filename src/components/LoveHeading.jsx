import React from 'react';

const LoveHeading = ({ onNext }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-rose-950 via-fuchsia-900 to-black text-white">
      {/* Decorative background hearts */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-fuchsia-700/30 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-rose-600/30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-40 w-40 rounded-full bg-pink-500/20 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 drop-shadow-[0_2px_12px_rgba(236,72,153,0.45)]">
          I LOVE YOU SHREYA 💗 💗
        </h2>
        <button
          onClick={onNext}
          className="mt-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Click Here
        </button>
      </div>
    </section>
  );
};

export default LoveHeading;
