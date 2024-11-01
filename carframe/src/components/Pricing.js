import React from 'react';

const Pricing = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-700 to-gray-600 text-white overflow-hidden py-10">
      
      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-2xl animate-floating-shape"></div>
      <div className="absolute -bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-2xl animate-floating-shape delay-1500"></div>

      {/* Pricing Header */}
      <div className="relative z-10 max-w-2xl mx-auto p-4">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">Nasze Ceny</h2>
        <p className="mt-6 text-xl md:text-2xl font-light animate-fade-in-up delay-1s">
          Oferujemy elastyczne pakiety usług, aby spełnić Twoje oczekiwania w zakresie sprzedaży samochodów.
        </p>
      </div>

      {/* Pricing Options */}
      <div className="relative z-10 w-full max-w-6xl p-6 mt-10 animate-fade-in-up delay-2s">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Zdjęcia</h3>
            <p className="text-3xl md:text-4xl font-bold mb-4">250 zł</p>
            <p className="text-gray-300">Profesjonalne zdjęcia Twojego samochodu, które przyciągną uwagę.</p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Zdjęcia + Opis</h3>
            <p className="text-3xl md:text-4xl font-bold mb-4">350 zł</p>
            <p className="text-gray-300">Dodaj szczegółowy opis, aby przyciągnąć jeszcze więcej klientów.</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 text-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Zdjęcia + Opis + Wystawienie Aukcji</h3>
            <p className="text-3xl md:text-4xl font-bold mb-4">550 zł</p>
            <p className="text-gray-300">Kompleksowa usługa, która zapewni Ci wszystko, czego potrzebujesz do sprzedaży.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;