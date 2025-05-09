import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (location.pathname !== '/') {
        window.location.href = '/#contact';
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="/" onClick={handleLogoClick} className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Corporate Combat Logo"
              className="h-24 w-24"
            />
            <span className="text-[rgb(var(--cc-text-rgb))] font-poppins font-bold text-xl">Corporate Combat</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))] transition-colors ${
                location.pathname === '/' ? 'text-[rgb(var(--cc-gold-rgb))]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/careers"
              className={`text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))] transition-colors ${
                location.pathname === '/careers' ? 'text-[rgb(var(--cc-gold-rgb))]' : ''
              }`}
            >
              Careers
            </Link>
            <Link
              to="/services"
              className={`text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))] transition-colors ${
                location.pathname === '/services' ? 'text-[rgb(var(--cc-gold-rgb))]' : ''
              }`}
            >
              Services
            </Link>
            <button
              onClick={handleContactClick}
              className="button-primary text-sm"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[rgb(var(--cc-text-rgb))]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-lg border-t border-[rgb(var(--cc-gold-rgb))]/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))] transition-colors py-2 ${
                location.pathname === '/' ? 'text-[rgb(var(--cc-gold-rgb))]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/careers"
              className={`text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))] transition-colors py-2 ${
                location.pathname === '/careers' ? 'text-[rgb(var(--cc-gold-rgb))]' : ''
              }`}
            >
              Careers
            </Link>
            <Link
              to="/services"
              className={`text-[rgb(var(--cc-text-rgb))] hover:text-[rgb(var(--cc-gold-rgb))] transition-colors py-2 ${
                location.pathname === '/services' ? 'text-[rgb(var(--cc-gold-rgb))]' : ''
              }`}
            >
              Services
            </Link>
            <button
              onClick={handleContactClick}
              className="button-primary text-center"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;