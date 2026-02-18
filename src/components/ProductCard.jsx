import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, ShieldCheck, Bike, Lightbulb, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  Zap,
  Settings,
  ShieldCheck,
  Bike,
  Lightbulb
};

const ProductCard = ({ product, index }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="premium-product-card"
    >
      <Link to={`/produto/${product.slug}`} className="card-inner">
        <div className="card-image-box">
          <div className="card-badge">{product.badge || product.category}</div>
          <img src={product.mainImage} alt={product.name} loading="lazy" />
        </div>
        
        <div className="card-details">
          <div className="card-brand">{product.brand}</div>
          <h3 className="card-title">{product.name}</h3>
          
          <div className="card-specs-row">
            {product.highlights.slice(0, 3).map((h, i) => {
              const Icon = iconMap[h.icon] || Zap;
              return (
                <div key={i} className="spec-tag">
                  <Icon size={12} />
                  <span>{h.text}</span>
                </div>
              );
            })}
          </div>

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
