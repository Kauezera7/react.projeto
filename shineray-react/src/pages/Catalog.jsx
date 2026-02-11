import React, { useState, useMemo, useEffect } from 'react';
import { Search, PackageSearch, X, Check, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [activeBrand, setActiveBrand] = useState('Todas');
  const [activeFuel, setActiveFuel] = useState('Todas');
  const [activeColor, setActiveColor] = useState('Todas');
  const [sortBy, setSortBy] = useState('default');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeCategory, activeBrand, activeFuel, activeColor, searchTerm]);

  const colorMap = {
    'Preto': '#000000', 'Branco': '#FFFFFF', 'Vermelho': '#C8080E',
    'Azul': '#0056b3', 'Cinza': '#808080'
  };

  const categories = ['Todas', 'Scooter', 'Motocicleta'];
  const brands = ['Todas', 'Shineray', 'SBM'];
  const fuels = ['Todas', 'Gasolina', 'Elétrica'];
  
  const allColors = useMemo(() => {
    const colors = new Set();
    productsData.forEach(p => p.colors?.forEach(c => colors.add(c)));
    return Array.from(colors);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todas' || product.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesBrand = activeBrand === 'Todas' || product.brand.toLowerCase() === activeBrand.toLowerCase();
      const matchesFuel = activeFuel === 'Todas' || product.fuel.toLowerCase() === activeFuel.toLowerCase();
      const matchesColor = activeColor === 'Todas' || product.colors?.includes(activeColor);
      return matchesSearch && matchesCategory && matchesBrand && matchesFuel && matchesColor;
    });

    const sorted = [...result];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '').replace(',', '.')) - parseFloat(b.price.replace(/[^\d.]/g, '').replace(',', '.')));
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '').replace(',', '.')) - parseFloat(a.price.replace(/[^\d.]/g, '').replace(',', '.')));
    }
    return sorted;
  }, [searchTerm, activeCategory, activeBrand, activeFuel, activeColor, sortBy]);

  const activeFiltersCount = [
    activeCategory !== 'Todas',
    activeBrand !== 'Todas',
    activeFuel !== 'Todas',
    activeColor !== 'Todas'
  ].filter(Boolean).length;

  return (
    <div className="drawer-catalog">
      {/* 1. BARRA DE NAVEGAÇÃO DO CATÁLOGO (FIXA) */}
      <header className="catalog-top-nav">
        <div className="container">
          <div className="top-nav-inner">
            <div className="catalog-title">
              <span className="subtitle">Shineray 2025</span>
              <h1>Showroom</h1>
            </div>
            
            <div className="catalog-actions">
              <div className="search-minimalist">
                <Search size={18} />
                <input 
                  type="text" placeholder="Buscar modelo..." 
                  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className={`btn-filter-toggle ${activeFiltersCount > 0 ? 'has-filters' : ''}`} onClick={() => setIsDrawerOpen(true)}>
                <SlidersHorizontal size={18} />
                <span>Filtros</span>
                {activeFiltersCount > 0 && <span className="filter-badge">{activeFiltersCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. GAVETA LATERAL DE FILTROS (DRAWER) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="drawer-overlay"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.aside 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="filter-drawer"
            >
              <div className="drawer-header">
                <h2>Ajustar Seleção</h2>
                <button className="btn-close-drawer" onClick={() => setIsDrawerOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="drawer-content">
                {/* CATEGORIAS */}
                <div className="drawer-section">
                  <h3>Estilo</h3>
                  <div className="options-stack">
                    {categories.map(cat => (
                      <button key={cat} className={activeCategory === cat ? 'active' : ''} onClick={() => setActiveCategory(cat)}>
                        {cat}
                        <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* MARCAS */}
                <div className="drawer-section">
                  <h3>Marca</h3>
                  <div className="options-grid">
                    {brands.map(b => (
                      <button key={b} className={activeBrand === b ? 'active' : ''} onClick={() => setActiveBrand(b)}>{b}</button>
                    ))}
                  </div>
                </div>

                {/* COMBUSTÍVEL */}
                <div className="drawer-section">
                  <h3>Propulsão</h3>
                  <div className="options-grid">
                    {fuels.map(f => (
                      <button key={f} className={activeFuel === f ? 'active' : ''} onClick={() => setActiveFuel(f)}>{f}</button>
                    ))}
                  </div>
                </div>

                {/* CORES */}
                <div className="drawer-section">
                  <h3>Cores</h3>
                  <div className="drawer-swatches">
                    <button className={activeColor === 'Todas' ? 'active' : ''} onClick={() => setActiveColor('Todas')}>Todas</button>
                    {allColors.map(c => (
                      <button 
                        key={c}
                        className={activeColor === c ? 'active' : ''}
                        style={{ backgroundColor: colorMap[c] }}
                        onClick={() => setActiveColor(c)}
                        title={c}
                      >
                        {activeColor === c && <Check size={12} color={c === 'Branco' ? '#000' : '#fff'} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ORDENAÇÃO */}
                <div className="drawer-section">
                  <h3>Ordenar por</h3>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="drawer-select">
                    <option value="default">Relevância</option>
                    <option value="price-asc">Menor Preço</option>
                    <option value="price-desc">Maior Preço</option>
                  </select>
                </div>
              </div>

              <div className="drawer-footer">
                <button className="btn-apply" onClick={() => setIsDrawerOpen(false)}>Mostrar {filteredAndSortedProducts.length} Resultados</button>
                <button className="btn-clear-all" onClick={() => {
                  setActiveCategory('Todas'); setActiveBrand('Todas');
                  setActiveFuel('Todas'); setActiveColor('Todas');
                }}>Limpar Tudo</button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* 3. CONTEÚDO PRINCIPAL (GRID) */}
      <main className="container catalog-viewport">
        <div className="viewport-header">
          <p>Exibindo <strong>{filteredAndSortedProducts.length}</strong> motocicletas de alta performance</p>
        </div>

        {isLoading ? (
          <div className="pro-loader-grid">
            {[1,2,3,4].map(i => <div key={i} className="skeleton-card-lux"></div>)}
          </div>
        ) : (
          <motion.div layout className="catalog-grid-lux">
            <AnimatePresence mode='popLayout'>
              {filteredAndSortedProducts.length > 0 ? (
                filteredAndSortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              ) : (
                <div className="empty-lux">
                  <PackageSearch size={50} strokeWidth={1} />
                  <h3>Nenhum modelo disponível para esta seleção.</h3>
                  <button onClick={() => {
                    setActiveCategory('Todas'); setActiveBrand('Todas');
                    setActiveFuel('Todas'); setActiveColor('Todas');
                  }}>Redefinir Filtros</button>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Catalog;