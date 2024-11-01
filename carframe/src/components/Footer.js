import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between px-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">CarFrame</h3>
          <p className="text-sm">Twoje zaufane źródło samochodów w Twojej okolicy.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#about" className="hover:text-teal-500 transition duration-300">O nas</a>
          <a href="#pricing" className="hover:text-teal-500 transition duration-300">Cennik</a>
          <a href="#contact" className="hover:text-teal-500 transition duration-300">Kontakt</a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs">© {new Date().getFullYear()} CarFrame. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
