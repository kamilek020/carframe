import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const carListings = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: '$25,000',
    image: 'https://via.placeholder.com/150',
    description: 'Zaufany sedan z doskonałą wydajnością.',
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Civic',
    year: 2020,
    price: '$22,000',
    image: 'https://via.placeholder.com/150',
    description: 'Sportowy wygląd i komfort jazdy.',
  },
  {
    id: 3,
    make: 'Mazda',
    model: 'CX-5',
    year: 2019,
    price: '$24,500',
    image: 'https://via.placeholder.com/150',
    description: 'SUV z dynamicznym designem i mocą.',
  },
  {
    id: 4,
    make: 'Mazda',
    model: 'CX-5',
    year: 2019,
    price: '$24,500',
    image: 'https://via.placeholder.com/150',
    description: 'SUV z dynamicznym designem i mocą.',
  },
  {
    id: 5,
    make: 'Mazda',
    model: 'CX-5',
    year: 2019,
    price: '$24,500',
    image: 'https://via.placeholder.com/150',
    description: 'SUV z dynamicznym designem i mocą.',
  },
  {
    id: 6,
    make: 'Mazda',
    model: 'CX-5',
    year: 2019,
    price: '$24,500',
    image: 'https://via.placeholder.com/150',
    description: 'SUV z dynamicznym designem i mocą.',
  },
];

const Listings = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-bl from-gray-800 to-gray-600 text-white overflow-hidden">
      
      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-2xl animate-floating-shape"></div>
      <div className="absolute -bottom-10 right-10 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-2xl animate-floating-shape delay-1500"></div>

      {/* Listings Header */}
      <div className="relative z-10 max-w-2xl mx-auto p-4">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">Nasza Oferta</h2>
        <p className="mt-6 text-xl md:text-2xl font-light animate-fade-in-up delay-1s">
          Przeglądaj naszą bogatą ofertę samochodów i znajdź pojazd idealny dla Ciebie.
        </p>
      </div>

      {/* Car Listings */}
      <div className="relative z-10 w-full max-w-6xl p-6 mt-10 animate-fade-in-up delay-2s">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="flex justify-center items-center"
        >
          {carListings.map((car) => (
            <SwiperSlide key={car.id} className="flex justify-center">
              <div className="max-w-xs w-full bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                
                {/* Image Section with Gradient Overlay */}
                <div className="relative">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-teal-400">{car.make} {car.model} ({car.year})</h3>
                  <p className="text-xl text-gray-300">{car.price}</p>
                  <p className="text-gray-400 mt-2">{car.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-teal-500 bg-opacity-10 rounded-xl transition duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Listings;