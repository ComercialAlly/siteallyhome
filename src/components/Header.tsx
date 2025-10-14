import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

interface HeaderProps {
  currentPage: 'home' | 'portfolio';
  onNavigate: (page: 'home' | 'portfolio') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    if (currentPage === 'portfolio') {
      onNavigate('home');
      setTimeout(() => {
        const footer = document.getElementById('contact');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const footer = document.getElementById('contact');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-white tracking-tight hover:text-orange-500 transition-colors"
          >
            Ally <span className="text-orange-500">Mídia</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-orange-500' : 'text-white hover:text-orange-500'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => window.open('https://allymidia.webflow.io/portfolio2', '_self')}
              className="text-sm font-medium text-white hover:text-orange-500 transition-colors"
            >
              Portfólio
            </button>
            <button
              onClick={scrollToContact}
              className="text-sm font-medium text-white hover:text-orange-500 transition-colors"
            >
              Contato
            </button>
          </nav>

          <button
            onClick={handleWhatsAppClick}
            className="hidden md:block bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
          >
            Fale com a gente
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-sm font-medium ${
                currentPage === 'home' ? 'text-orange-500' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                window.open('https://allymidia.webflow.io/portfolio2', '_self');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm font-medium text-white"
            >
              Portfólio
            </button>
            <button
              onClick={scrollToContact}
              className="block w-full text-left text-sm font-medium text-white"
            >
              Contato
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-orange-500 text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              Fale com a gente
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
