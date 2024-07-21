import React, { useContext } from 'react';
import QuoteCard from './QuoteCard';
import { QuotesContext } from '../contexts/QuotesContext';

function QuoteList() {
  const { quotes } = useContext(QuotesContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Quotes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
}

export default QuoteList;
