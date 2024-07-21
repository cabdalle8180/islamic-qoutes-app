import React, { useState } from 'react';
import AddQuoteForm from '../components/AddQuoteForm';

function AddQuote() {
  const [error, setError] = useState('');

  const handleFormError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div id="add-quote" className="container mx-auto p-4 my-8">
      {error && <div className="error-message text-red-600">{error}</div>}
      <AddQuoteForm onError={handleFormError} />
    </div>
  );
}

export default AddQuote;