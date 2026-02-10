import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Config } from '../data/config';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Coluna 1: Logo e Empresa */}
          <div className="footer-section">
            <Link to="/" className="logo">
              <img src="/img/Shineray-logo-branco.png" alt="Shineray Logo" className="logo-footer" />
            </Link>
            <p className="config-company-info">
              {Config.empresa.copyright}<br />
              CNPJ: {Config.empresa.cnpj}
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="footer-section">
            <h3>Navegação</h3>
            <ul className="footer-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/catalogo">Catálogo</Link></li>
              <li><a href={`https://wa.me/${Config.contato.whatsapp.numero}`} target="_blank" rel="noopener noreferrer">Contato</a></li>
              <li><Link to="/vendedores">Vendedores</Link></li>
            </ul>
          </div>
          
          {/* Coluna 3: Informações de Contato */}
          <div className="footer-section">
            <h3>Contato</h3>
            <p><Phone size={16} /> {Config.contato.telefone.formatado}</p>
            <p><Mail size={16} /> {Config.contato.email}</p>
            <a href={Config.endereco.linkGoogleMaps} className="btn btn-location" target="_blank" rel="noopener noreferrer">
              <MapPin size={16} /> Localização
            </a>
          </div>
          
          {/* Coluna 4: Redes Sociais */}
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-links-footer">
              <a href={Config.redesSociais.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
              <a href={Config.redesSociais.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href={Config.redesSociais.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;