import React from 'react';
import developerImage from '../assets/images/developer1.jpeg'; // Ensure this path is correct

function About() {
  return (
    <div id="about" className="">
      <div className="container mx-auto max-w-6xl py-8 px-4 flex flex-col md:flex-row items-center bg-white bg-opacity-90 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            Islamic Quotes is a platform dedicated to providing inspirational and motivational quotes from Islamic teachings. Our mission is to spread the wisdom of Islam and inspire people to lead better lives through the teachings of the Quran and the sayings of Prophet Muhammad (SAW).
          </p>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center">
          <div className="max-w-xs text-center">
            <img
              src={developerImage}
              alt="Developer"
              className="rounded-full shadow-lg mb-7 w-32 h-45"
            />
            <h2 className="text-2xl font-bold text-gray-900">Developer Name</h2>
            <p className="text-gray-700">Full Stack Developer</p>
            <p className="text-gray-700">Passionate about building meaningful web applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
