import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Config } from '../data/config';

/**
 * Componente de Cabeçalho (Navbar)
 * Gerencia a navegação principal, o estado do scroll para efeitos visuais 
 * e o menu responsivo (mobile).
 */
const Header = () => {
  // Estado para controlar se a página foi rolada (muda o estilo da navbar)
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar a abertura/fechamento do menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Efeito para monitorar o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile automaticamente ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Bloqueia o scroll do corpo da página quando o menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [isMobileMenuOpen]);

  // Definição dos links de navegação
  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Vendedores', path: '/vendedores' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container-full-width nav-container">
        {/* Logo da Empresa */}
        <Link to="/" className="logo nav-logo">
          <img src="/img/Shineray-logo2.png" alt="Shineray Logo" />
        </Link>

        {/* Menu Desktop */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ y: -2 }}
              className="nav-link-wrapper"
            >
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {/* Link dinâmico para o WhatsApp configurado globalmente */}
          <motion.div
            whileHover={{ y: -2 }}
            className="nav-link-wrapper"
          >
            <a 
              href={`https://wa.me/${Config.contato.whatsapp.numero}`} 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              Contato
            </a>
          </motion.div>
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay do Menu Mobile (com animação Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay active"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-menu-content">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {/* Botão de WhatsApp no Menu Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href={`https://wa.me/${Config.contato.whatsapp.numero}`} 
                  className="btn-mobile-whatsapp"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Falar com Vendedor <MessageCircle size={18} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
