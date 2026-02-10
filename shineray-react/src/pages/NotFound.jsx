import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ghost, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 20px 80px'
    }}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Ghost size={120} color="#ddd" strokeWidth={1} style={{ marginBottom: 20 }} />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--dark)' }}
      >
        404
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: '1.2rem', color: 'var(--gray)', marginBottom: 40 }}
      >
        Ops! A página que você procura não existe.
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <ArrowLeft size={20} /> Voltar para o Início
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
