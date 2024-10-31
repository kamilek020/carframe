import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CarFrame</h1>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#listings" className="hover:text-blue-500">Oferta</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Cennik</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;