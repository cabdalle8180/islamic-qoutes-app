import React, { useState } from 'react';
import logoImage from '../assets/images/35322171_8_1sasa11-removebg-preview.png'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setCurrentPage, isAuthenticated, userEmail, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed w-full z-10 flex justify-between items-center p-4 ">
      <img src={logoImage} alt="Logo" className="h-16 mr-10 " />
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white rounded-full shadow-md px-8 py-2 flex space-x-8 items-center">
          <a
            href="#home"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setCurrentPage('home')}
          >
            Home
          </a>
          <a
            href="#quotes"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setCurrentPage('quotes')}
          >
            Quotes
          </a>
          <a
            href="#add-quote"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setCurrentPage('add-quote')}
          >
            Add Quote
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setCurrentPage('about')}
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-500"
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </a>
        </div>
      </div>
      {isAuthenticated && (
        <div className="relative">
          <button onClick={toggleDropdown} className="h-16 mr-10 text-white hover:text-red-500 cursor-pointer">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <div className="p-4 text-sm text-gray-700">{userEmail}</div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;