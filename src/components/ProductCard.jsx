import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, ShieldCheck, Bike, Lightbulb, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Mapeamento de Ícones (Dicionário)
 * Permite associar strings vindas do banco de dados (JSON) a componentes de ícones reais.
 */
const iconMap = {
  Zap,
  Settings,
  ShieldCheck,
  Bike,
  Lightbulb
};

/**
 * Componente: Cartão de Produto (Product Card)
 * Representa um veículo individual no catálogo com efeitos de hover e animações de entrada.
 */
const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }} // Eleva o card suavemente ao passar o mouse
      className="premium-product-card"
    >
      {/* Link dinâmico baseado no 'slug' do produto */}
      <Link to={`/produto/${product.slug}`} className="card-inner">
        <div className="card-image-box">
          {/* Badge dinâmica (Ex: Popular, Novo, Off-Road) */}
          <div className="card-badge">{product.badge || product.category}</div>
          <img src={product.mainImage} alt={product.name} loading="lazy" />
        </div>
        
        <div className="card-details">
          <div className="card-brand">{product.brand}</div>
          <h3 className="card-title">{product.name}</h3>
          
          {/* Linha de Destaques Rápidos (Mostra os 3 primeiros) */}
          <div className="card-specs-row">
            {product.highlights.slice(0, 3).map((h, i) => {
              const Icon = iconMap[h.icon] || Zap; // Fallback para Zap se o ícone não existir
              return (
                <div key={i} className="spec-tag">
                  <Icon size={12} />
                  <span>{h.text}</span>
                </div>
              );
            })}
          </div>

          {/* Rodapé do Card com Preço e Ícone de Ação */}
          <div className="card-footer">
            <div className="card-price-box">
              <span className="price-label">A partir de</span>
              <span className="price-value">{product.price}</span>
            </div>
            <div className="card-action-btn">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
