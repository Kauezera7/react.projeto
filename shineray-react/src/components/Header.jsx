import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Config } from '../data/config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile ao mudar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/img/Shineray-logo2.png" alt="Shineray Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links-desktop">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Início</Link>
          <Link to="/catalogo" className={location.pathname === '/catalogo' ? 'active' : ''}>Produtos</Link>
          <Link to="/vendedores" className={location.pathname === '/vendedores' ? 'active' : ''}>Vendedores</Link>
          <a 
            href={`https://wa.me/${Config.contato.whatsapp.numero}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-nav"
          >
            Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <div className="container">
              <Link to="/">Início</Link>
              <Link to="/catalogo">Produtos</Link>
              <Link to="/vendedores">Vendedores</Link>
              <a href={`https://wa.me/${Config.contato.whatsapp.numero}`} className="btn-mobile-whatsapp">
                Falar com Vendedor <MessageCircle size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;