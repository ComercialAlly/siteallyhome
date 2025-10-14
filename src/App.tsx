import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: 'home' | 'portfolio') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' ? (
        <Home onNavigate={handleNavigate} />
      ) : (
        <Portfolio onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
