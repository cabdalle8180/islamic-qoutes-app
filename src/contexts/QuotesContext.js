import React, { createContext, useState, useEffect } from 'react';

export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Load quotes from local storage when the component mounts
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
      setQuotes(JSON.parse(storedQuotes));
    } else {
      // If no quotes are stored, set default quotes
      setQuotes([
        { id: 1, text: 'The best among you are those who have the best manners and character.', author: 'Prophet Muhammad (SAW)' },
        { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' }
      ]);
    }
  }, []);

  useEffect(() => {
    // Save quotes to local storage whenever the quotes state changes
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }, [quotes]);

  const addQuote = (quote) => {
    setQuotes([...quotes, { id: quotes.length + 1, ...quote }]);
  };

  const updateQuote = (id, updatedQuote) => {
    const updatedQuotes = quotes.map((quote) => (quote.id === id ? { id, ...updatedQuote } : quote));
    setQuotes(updatedQuotes);
  };

  const deleteQuote = (id) => {
    const updatedQuotes = quotes.filter((quote) => quote.id !== id);
    setQuotes(updatedQuotes);
  };

  return (
    <QuotesContext.Provider value={{ quotes, addQuote, updateQuote, deleteQuote }}>
      {children}
    </QuotesContext.Provider>
  );
};