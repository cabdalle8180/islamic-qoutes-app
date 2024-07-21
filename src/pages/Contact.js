import React from 'react';

function Contact() {
  return (
    <div id="contact" className="container max-w-6xl py-8 px-4 mx-auto p-4 my-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
      <form className="">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
