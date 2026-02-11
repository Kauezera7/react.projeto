import React from 'react';
import { motion } from 'framer-motion';
import { User, MessageCircle, ChevronRight, ShieldCheck, Star } from 'lucide-react';
import { Config } from '../data/config';

const sellers = [
  { 
    id: 1, 
    name: "João Silva", 
    role: "Consultor de Vendas Especialista", 
    phone: "5541999999999",
    specialty: "Linha Scooter",
    experience: "8 anos"
  },
  { 
    id: 2, 
    name: "Maria Oliveira", 
    role: "Especialista em Financiamento", 
    phone: "5541888888888",
    specialty: "Crédito Facilitado",
    experience: "5 anos"
  },
  { 
    id: 3, 
    name: "Ricardo Santos", 
    role: "Gerente Comercial Shineray", 
    phone: "5541777777777",
    specialty: "Vendas Corporativas",
    experience: "12 anos"
  }
];

const Sellers = () => {
  return (
    <div className="premium-sellers-page">
      <div className="container">
        {/* HEADER ELEGANTE */}
        <header className="sellers-header">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="header-content"
          >
            <span className="top-tag">Atendimento Exclusivo</span>
            <h1>Nossos <span className="thin">Consultores</span></h1>
            <p>Especialistas prontos para ajudar você a encontrar sua Shineray ideal.</p>
          </motion.div>
        </header>

        {/* LISTA DE VENDEDORES */}
        <div className="sellers-grid-premium">
          {sellers.map((seller, index) => (
            <motion.div
              key={seller.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="seller-card-wrapper"
            >
              <a 
                href={`https://wa.me/${seller.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="seller-card-premium"
              >
                <div className="seller-avatar-section">
                  <div className="avatar-circle">
                    <User size={40} strokeWidth={1.5} />
                  </div>
                  <div className="online-badge">
                    <span className="dot"></span> Online agora
                  </div>
                </div>

                <div className="seller-main-info">
                  <div className="role-tag">{seller.role}</div>
                  <h3>{seller.name}</h3>
                  <div className="seller-details">
                    <span><ShieldCheck size={14} /> {seller.specialty}</span>
                    <span><Star size={14} /> {seller.experience} de mercado</span>
                  </div>
                </div>

                <div className="seller-action-premium">
                  <div className="wa-icon-box">
                    <MessageCircle size={22} />
                  </div>
                  <span className="action-text">Iniciar Consultoria</span>
                  <ChevronRight size={18} className="arrow-icon" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* RODAPÉ DE CONFIANÇA */}
        <footer className="sellers-footer-info">
          <div className="info-box">
            <ShieldCheck size={32} />
            <p>Atendimento seguro e certificado pela Shineray Colombo.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sellers;