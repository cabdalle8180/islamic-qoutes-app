import React from 'react';

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-left animate-slide-in-left p-4">
        <h2 className="text-5xl font-bold text-black-900 mb-6" >Welcome to</h2>
        <h1 className="text-7xl font-bold text-black-500 mb-6">Islamic Quotes</h1>
          <p className="text-4xl font-bold text-black-900 text-lg leading-relaxed mb-6">
            Discover beautiful and inspirational Islamic quotes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
