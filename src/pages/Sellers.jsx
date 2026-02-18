import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, MessageCircle, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';
import { sellersData } from '../data/sellers';

const Sellers = () => {
  return (
    <div className="premium-sellers-page">
      <div className="container-full-width">
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
          {sellersData.map((seller, index) => (
            <motion.div
              key={seller.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="seller-card-wrapper"
            >
              <Link 
                to={`/consultor/${seller.id}`}
                className="seller-card-premium"
              >
                <div className="seller-avatar-section">
                  <div className="avatar-circle">
                    {seller.avatar ? (
                        <img 
                            src={seller.avatar} 
                            alt={seller.name} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                    ) : (
                        <User size={40} strokeWidth={1.5} />
                    )}
                  </div>
                  <div className="online-badge">
                    <span className="dot"></span> Online agora
                  </div>
                </div>

                <div className="seller-main-info">
                  <div className="role-tag">{seller.role}</div>
                  <h3>{seller.name}</h3>
                  <div className="seller-details">
                    <span><MapPin size={14} /> {seller.location}</span>
                    {/* Removed experience as it's not in the new data schema */}
                  </div>
                </div>

                <div className="seller-action-premium">
                  <div className="wa-icon-box">
                    <MessageCircle size={22} />
                  </div>
                  <span className="action-text">Ver Perfil Completo</span>
                  <ChevronRight size={18} className="arrow-icon" />
                </div>
              </Link>
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
