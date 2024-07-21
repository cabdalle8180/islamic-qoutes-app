import React from 'react';

function QuoteCard({ quote }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="text-black text-xl mb-4">"{quote.text}"</p>
      <p className="text-black-900 text-sm">- {quote.author}</p>
    </div>
  );
}

export default QuoteCard;
