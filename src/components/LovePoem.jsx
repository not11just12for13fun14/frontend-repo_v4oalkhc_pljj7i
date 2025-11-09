import React from 'react';

const LovePoem = ({ onNext }) => {
  const lines = [
    'I LOVE YOU SHREYA ❤️',
    'YOU ARE MY HEART 💞',
    'YOUR ARE MY SWEETHEART 😘',
    'YOU ARE MY EVERYTHING',
    'YOU ARE MY LIFE',
    "I CAN'T SURVIVE WITHOUT YOU",
    'YOU ARE MY SOUL',
    'YOU ARE MOST BEAUTIFUL GIRL IN THE WORLD 🌎',
    'YOU ARE  GORGEOUS 🤩 🥰',
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900 via-fuchsia-900 to-black text-white">
      {/* Floating heart shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-16 top-20 h-24 w-24 rotate-12 rounded-[60%_60%_0_60%] bg-pink-500/40 blur-xl" />
        <div className="absolute right-16 bottom-24 h-32 w-32 -rotate-12 rounded-[60%_60%_0_60%] bg-fuchsia-500/40 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <div className="rounded-3xl border border-pink-500/30 bg-white/5 p-8 sm:p-10 backdrop-blur-md shadow-2xl shadow-pink-900/30">
          <ul className="space-y-3 text-left">
            {lines.map((text, idx) => (
              <li
                key={idx}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-pink-100/95 tracking-wide"
              >
                {text}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onNext}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
        >
          Click Here
        </button>
      </div>
    </section>
  );
};

export default LovePoem;
