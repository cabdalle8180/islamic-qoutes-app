import React, { useState, useContext } from 'react';
import { QuotesContext } from '../contexts/QuotesContext';

function AddQuoteForm() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const { addQuote } = useContext(QuotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuote({ text, author });
    setText('');
    setAuthor('');
  };

  return (
    <div className="container max-w-6xl py-8 px-4 mx-auto p-4 my-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Quote</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Quote</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Author</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Add Quote
        </button>
      </form>
    </div>
  );
}

export default AddQuoteForm;
