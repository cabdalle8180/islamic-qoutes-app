import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import AddQuote from './pages/AddQuote';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/SignUp';
import { QuotesProvider } from './contexts/QuotesContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  if (!isAuthenticated) {
    if (currentPage === 'login') {
      return <Login onLogin={handleLogin} onNavigateToSignup={() => setCurrentPage('signup')} />;
    } else if (currentPage === 'signup') {
      return <Signup onSignup={handleSignup} onNavigateToLogin={() => setCurrentPage('login')} />;
    }
  }

  return (
    <QuotesProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 bg-cover bg-center flex flex-col">
        {isAuthenticated && <Navbar activeSection={currentPage} setCurrentPage={setCurrentPage} />}
        <div className="flex-grow overflow-auto">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="quotes" className="min-h-screen">
            <Quotes />
          </section>
          <section id="add-quote" className="min-h-screen">
            <AddQuote />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </QuotesProvider>
  );
}

export default App;