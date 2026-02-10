import React from 'react';
import { motion } from 'framer-motion';
import { User, MessageCircle, ChevronRight } from 'lucide-react';
import { Config } from '../data/config';

const sellers = [
  { id: 1, name: "João Silva", role: "Consultor de Vendas", phone: "5541999999999" },
  { id: 2, name: "Maria Oliveira", role: "Especialista Shineray", phone: "5541888888888" },
  { id: 3, name: "Ricardo Santos", role: "Gerente Comercial", phone: "5541777777777" }
];

const Sellers = () => {
  return (
    <div className="sellers-page">
      <div className="container">
        <div className="section-header">
          <h1>Nossos <span className="highlight">Consultores</span></h1>
          <p>Escolha um de nossos especialistas para um atendimento personalizado.</p>
        </div>

        <div className="sellers-list">
          {sellers.map((seller, index) => (
            <motion.a 
              key={seller.id}
              href={`https://wa.me/${seller.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="seller-card-link"
            >
              <div className="seller-avatar">
                <User size={30} />
              </div>
              <div className="seller-info">
                <h3>{seller.name}</h3>
                <span>{seller.role}</span>
              </div>
              <div className="seller-action">
                <MessageCircle size={20} />
                <ChevronRight size={18} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
