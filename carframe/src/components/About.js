import React from 'react';

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-400 to-blue-500 text-white py-10">
      
      {/* Nagłówek */}
      <h2 className="text-5xl font-bold mb-6">O Nas</h2>
      <p className="text-lg mb-10 px-4 sm:px-0 max-w-2xl mx-auto">
        Zespół CarFrame to pasjonaci motoryzacji, którzy stawiają na jakość i zaufanie. Naszym celem jest pomoc w znalezieniu idealnego pojazdu.
      </p>

      {/* Kolumny z informacjami */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm transition-transform hover:scale-105">
          <h3 className="text-3xl font-semibold mb-4 text-green-600">Nasza Misja</h3>
          <p className="text-md text-gray-700">
            Dążymy do tego, aby każdy klient czuł się komfortowo podczas zakupu samochodu.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm transition-transform hover:scale-105">
          <h3 className="text-3xl font-semibold mb-4 text-green-600">Nasza Wizja</h3>
          <p className="text-md text-gray-700">
            Chcemy być liderem w branży, oferując najlepsze pojazdy i usługi.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 max-w-sm transition-transform hover:scale-105">
          <h3 className="text-3xl font-semibold mb-4 text-green-600">Nasze Wartości</h3>
          <p className="text-md text-gray-700">
            Uczciwość, jakość i satysfakcja klienta są dla nas najważniejsze.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
