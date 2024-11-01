import React from 'react';

const Hero = ({ fullpageApi }) => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-700 to-teal-700 text-white overflow-hidden">
      
      {/* Video Background */}
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-2xl animate-floating-shape"></div>
      <div className="absolute -bottom-10 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-2xl animate-floating-shape delay-1500"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-4">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight animate-fade-in-up">Witamy w CarFrame</h1>
        <p className="mt-6 text-xl md:text-2xl font-light animate-fade-in-up delay-1s">
          Znajdź samochód swoich marzeń. Profesjonalna sprzedaż samochodów w Twojej okolicy.
        </p>
        
        <p className="mt-4 text-lg md:text-xl text-teal-200 animate-fade-in-up delay-2s">
          Oferujemy szeroki wybór sprawdzonych samochodów i pomoc w wyborze idealnego modelu.
        </p>

        <button 
          onClick={() => fullpageApi.moveSectionDown()} // Dodaj funkcję do przewijania
          className="mt-8 px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-blue-100 transition duration-300 animate-fade-in-up delay-3s">
          Przeglądaj Ofertę
        </button>
      </div>
    </section>
  );
};

export default Hero;
