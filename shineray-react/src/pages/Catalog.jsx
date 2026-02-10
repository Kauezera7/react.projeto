import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, PackageSearch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [sortBy, setSortBy] = useState('default'); // default, price-asc, price-desc

  const categories = ['Todas', 'Scooter', 'Motocicleta', 'Elétrica'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todas' || 
        product.category.toLowerCase() === activeCategory.toLowerCase() ||
        (activeCategory === 'Elétrica' && product.fuel?.toLowerCase() === 'eletrica');
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => parseFloat(a.price.replace(/[^\d,]/g, '').replace(',', '.')) - parseFloat(b.price.replace(/[^\d,]/g, '').replace(',', '.')));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parseFloat(b.price.replace(/[^\d,]/g, '').replace(',', '.')) - parseFloat(a.price.replace(/[^\d,]/g, '').replace(',', '.')));
    }

    return result;
  }, [searchTerm, activeCategory, sortBy]);

  return (
    <div className="catalog-container">
      {/* Header do Catálogo */}
      <section className="catalog-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Explore nossa <span className="highlight">Linha Completa</span>
          </motion.h1>
          <p>Potência, economia e tecnologia em cada modelo.</p>
        </div>
      </section>

      <div className="container">
        {/* Barra de Controles Profissional */}
        <div className="catalog-controls">
          <div className="search-box-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Qual moto você procura?" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters-row">
            <div className="category-tabs">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="sort-dropdown">
              <SlidersHorizontal size={16} />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Ordenar por</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contador de Resultados */}
        <div className="results-count">
          Exibindo <strong>{filteredAndSortedProducts.length}</strong> modelos encontrados
        </div>

        {/* Grid de Produtos */}
        <motion.div layout className="catalog-grid">
          <AnimatePresence mode='popLayout'>
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="no-results-premium"
              >
                <PackageSearch size={60} strokeWidth={1} />
                <h3>Nenhum modelo encontrado</h3>
                <p>Tente ajustar sua busca ou mudar os filtros de categoria.</p>
                <button onClick={() => {setSearchTerm(''); setActiveCategory('Todas');}} className="btn-clear">
                  Limpar todos os filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Catalog;