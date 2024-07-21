import React from 'react';
import QuoteList from '../components/QuoteList';

function Quotes() {
  return (
    <div id="quotes" className="container mx-auto p-4 my-8 bg-blue">
      <QuoteList />
    </div>
  );
}

export default Quotes;

// import React from 'react';
// import QuoteList from '../components/QuoteList'; // Ensure this import path is correct

// function Quotes() {
//   return (
//     <div id="quotes" className="container mx-auto p-4 my-8 bg-blue-500">
//       <QuoteList />
//     </div>
//   );
// }

// export default Quotes;
