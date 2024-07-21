import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-4 text-black text-center mt-auto shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mt-1">
          <a href="https://www.facebook.com" className="text-black hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="text-black hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" className="text-black hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p>&copy; 2024 Islamic Quotes. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;