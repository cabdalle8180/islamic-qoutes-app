import React, { createContext, useState } from 'react';

export const QuotesContext = createContext();

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([
    { id: 1, text: 'The best among you are those who have the best manners and character.', author: 'Prophet Muhammad (SAW)' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    { id: 2, text: 'Allah does not burden a soul beyond that it can bear.', author: 'Quran 2:286' },
    // Add more quotes here
  ]);

  const addQuote = (quote) => {
    setQuotes([...quotes, { id: quotes.length + 1, ...quote }]);
  };

  return (
    <QuotesContext.Provider value={{ quotes, addQuote }}>
      {children}
    </QuotesContext.Provider>
  );
};
