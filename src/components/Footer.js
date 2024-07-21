import React from 'react';

function Footer() {
  return (
    <footer className=" p-0 text-black text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; 2024 Islamic Quotes. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.facebook.com" className="text-black hover:text-blue-600">Facebook</a>
          <a href="https://www.twitter.com" className="text-black hover:text-blue-600">Twitter</a>
          <a href="https://www.instagram.com" className="text-black hover:text-blue-600">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
