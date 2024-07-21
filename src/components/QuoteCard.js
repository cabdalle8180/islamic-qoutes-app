import React, { useState, useContext } from 'react';
import { QuotesContext } from '../contexts/QuotesContext';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function QuoteCard({ quote }) {
  const { updateQuote, deleteQuote } = useContext(QuotesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(quote.text);
  const [author, setAuthor] = useState(quote.author);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteQuote(quote.id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateQuote(quote.id, { text, author });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      <div className="absolute top-2 right-2 flex space-x-2">
        <button onClick={handleEdit} className="text-gray-600 hover:text-blue-600">
          <FiEdit />
        </button>
        <button onClick={handleDelete} className="text-gray-600 hover:text-red-600">
          <FiTrash2 />
        </button>
      </div>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Quote</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Author</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
            Update
          </button>
        </form>
      ) : (
        <>
          <p className="text-black text-xl mb-4">"{quote.text}"</p>
          <p className="text-black-900 text-sm">- {quote.author}</p>
        </>
      )}
    </div>
  );
}

export default QuoteCard;