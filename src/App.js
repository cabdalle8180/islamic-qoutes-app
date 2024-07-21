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
  const [userEmail, setUserEmail] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    scrollToSection('home');
  };

  const handleSignup = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    scrollToSection('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(sectionId); // Update the currentPage state
  };

  if (!isAuthenticated) {
    return currentPage === 'login' ? (
      <Login onLogin={handleLogin} onNavigateToSignup={() => setCurrentPage('signup')} />
    ) : (
      <Signup onSignup={handleSignup} onNavigateToLogin={() => setCurrentPage('login')} />
    );
  }

  return (
    <QuotesProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-500 bg-cover bg-center flex flex-col">
        <Navbar
          activeSection={currentPage}
          setCurrentPage={scrollToSection}
          isAuthenticated={isAuthenticated}
          userEmail={userEmail}
          handleLogout={handleLogout}
        />
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