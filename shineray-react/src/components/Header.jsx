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

  // Gerencia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
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
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay - Estilo Original (Vindo da Esquerda) */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
          <Link to="/catalogo" onClick={() => setIsMobileMenuOpen(false)}>Produtos</Link>
          <Link to="/vendedores" onClick={() => setIsMobileMenuOpen(false)}>Vendedores</Link>
          <a 
            href={`https://wa.me/${Config.contato.whatsapp.numero}`} 
            className="btn-mobile-whatsapp"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Falar com Vendedor <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;