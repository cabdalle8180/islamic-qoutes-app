import React from 'react';
import logoImage from '../assets/images/developer.jpeg'; // Ensure this path is correct

const Navbar = ({ activeSection, setCurrentPage }) => {
  return (
    <nav className="">
      <img src={logoImage} alt="Logo" className="h-10 mr-10" />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white rounded-full shadow-md px-8 py-2 flex space-x-8 items-center">
          <a
            href="#home"
            className={`text-gray-700 hover:text-blue-500 ${
              activeSection === 'home' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </a>
          <a
            href="#quotes"
            className={`text-gray-700 hover:text-blue-500 ${
              activeSection === 'quotes' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => setCurrentPage('quotes')}
          >
            Quotes
          </a>
          <a
            href="#add-quote"
            className={`text-gray-700 hover:text-blue-500 ${
              activeSection === 'add-quote' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => setCurrentPage('add-quote')}
          >
            Add Quote
          </a>
          <a
            href="#about"
            className={`text-gray-700 hover:text-blue-500 ${
              activeSection === 'about' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => setCurrentPage('about')}
          >
            About
          </a>
          <a
            href="#contact"
            className={`text-gray-700 hover:text-blue-500 ${
              activeSection === 'contact' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;