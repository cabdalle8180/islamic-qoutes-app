import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { QuotesContext } from '../contexts/QuotesContext';

function QuoteDetail() {
  const { id } = useParams();
  const { quotes } = useContext(QuotesContext);
  const quote = quotes.find((quote) => quote.id === parseInt(id));

  if (!quote) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quote not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quote Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 text-xl mb-4">"{quote.text}"</p>
        <p className="text-gray-500 text-sm">- {quote.author}</p>
      </div>
    </div>
  );
}

export default QuoteDetail;
