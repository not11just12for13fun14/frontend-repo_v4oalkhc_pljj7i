import React from 'react';

const LoveQuote = () => {
  const quote = `In the quiet spaces between heartbeats, your name is the echo that makes me whole. 
  Your smile turns nights into stardust and mornings into poetry. 
  With every breath, I choose you—today, tomorrow, and in every lifetime where love remembers us.`;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-rose-950 to-fuchsia-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-rose-600/30 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-fuchsia-600/30 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 mb-6">
          Thank you, my Love
        </h3>
        <p className="whitespace-pre-line text-lg sm:text-xl md:text-2xl text-pink-100/90 leading-relaxed">
          {quote}
        </p>
        <p className="mt-10 text-xl font-semibold text-pink-200">THANK YOU</p>
      </div>
    </section>
  );
};

export default LoveQuote;
