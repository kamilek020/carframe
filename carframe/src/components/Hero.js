import React from 'react';

const Hero = () => {
    return (
      <section id="hero" className="h-screen bg-gray-100 flex items-center justify-center text-center">
        <h2 className="text-4xl font-bold">Witamy w CarFrame</h2>
        <p className="mt-4 text-xl">Profesjonalna sprzedaż samochodów w Twojej okolicy</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Skontaktuj się
        </button>
      </section>
    );
  };
  

export default Hero;