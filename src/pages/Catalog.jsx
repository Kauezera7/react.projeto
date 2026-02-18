import React, { useState, useMemo, useEffect } from 'react';
import { Search, PackageSearch, X, Check, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { productsData } from '../data/products';
import ProductCard from '../components/ProductCard';

/**
 * Página de Catálogo (Showroom)
 * Apresenta a listagem de produtos com sistema avançado de filtros e busca.
 */
const Catalog = () => {
  // Estados para controle de busca e filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [activeBrand, setActiveBrand] = useState('Todas');
  const [activeFuel, setActiveFuel] = useState('Todas');
  const [activeColor, setActiveColor] = useState('Todas');
  const [sortBy, setSortBy] = useState('default');
  
  // Estados de Interface (UI)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Efeito para simular carregamento ao aplicar filtros (melhora a percepção de UX)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeCategory, activeBrand, activeFuel, activeColor, searchTerm]);

  // Mapeamento de cores para exibição visual nos círculos (swatches)
  const colorMap = {
    'Preto': '#000000', 'Branco': '#FFFFFF', 'Vermelho': '#C8080E',
    'Azul': '#0056b3', 'Cinza': '#808080'
  };

  // Opções de filtros disponíveis
  const categories = ['Todas', 'Scooter', 'Motocicleta'];
  const brands = ['Todas', 'Shineray', 'SBM'];
  const fuels = ['Todas', 'Gasolina', 'Elétrica'];
  
  // Extrai dinamicamente todas as cores presentes nos produtos para o filtro
  const allColors = useMemo(() => {
    const colors = new Set();
    productsData.forEach(p => p.colors?.forEach(c => colors.add(c)));
    return Array.from(colors);
  }, []);

  // Lógica principal: Filtragem e Ordenação dos Produtos
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filtragem por múltiplos critérios
    let result = productsData.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'Todas' || product.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesBrand = activeBrand === 'Todas' || product.brand.toLowerCase() === activeBrand.toLowerCase();
      const matchesFuel = activeFuel === 'Todas' || product.fuel.toLowerCase() === activeFuel.toLowerCase();
      const matchesColor = activeColor === 'Todas' || product.colors?.includes(activeColor);
      return matchesSearch && matchesCategory && matchesBrand && matchesFuel && matchesColor;
    });

    // 2. Ordenação por preço
    const sorted = [...result];
    if (sortBy === 'price-asc') {
      // Converte string de preço (R$ 10.000,00) para número para ordenar corretamente
      sorted.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '').replace(',', '.')) - parseFloat(b.price.replace(/[^\d.]/g, '').replace(',', '.')));
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '').replace(',', '.')) - parseFloat(a.price.replace(/[^\d.]/g, '').replace(',', '.')));
    }
    return sorted;
  }, [searchTerm, activeCategory, activeBrand, activeFuel, activeColor, sortBy]);

  // Conta quantos filtros estão ativos no momento
  const activeFiltersCount = [
    activeCategory !== 'Todas',
    activeBrand !== 'Todas',
    activeFuel !== 'Todas',
    activeColor !== 'Todas'
  ].filter(Boolean).length;

  return (
    <div className="drawer-catalog">
      {/* 1. CABEÇALHO DO CATÁLOGO (Busca e Botão de Filtro) */}
      <header className="catalog-top-nav">
        <div className="container-full-width">
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

      {/* 2. GAVETA LATERAL DE FILTROS (Overlay e Menu) */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Fundo escurecido que fecha o menu ao ser clicado */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="drawer-overlay"
              onClick={() => setIsDrawerOpen(false)}
            />
            {/* Menu Lateral Animado */}
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
                {/* Filtro por Estilo (Categoria) */}
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

                {/* Filtro por Marca */}
                <div className="drawer-section">
                  <h3>Marca</h3>
                  <div className="options-grid">
                    {brands.map(b => (
                      <button key={b} className={activeBrand === b ? 'active' : ''} onClick={() => setActiveBrand(b)}>{b}</button>
                    ))}
                  </div>
                </div>

                {/* Filtro por Propulsão (Combustível) */}
                <div className="drawer-section">
                  <h3>Propulsão</h3>
                  <div className="options-grid">
                    {fuels.map(f => (
                      <button key={f} className={activeFuel === f ? 'active' : ''} onClick={() => setActiveFuel(f)}>{f}</button>
                    ))}
                  </div>
                </div>

                {/* Filtro por Cores */}
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

                {/* Seletor de Ordenação */}
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

      {/* 3. CONTEÚDO PRINCIPAL (Grid de Resultados) */}
      <main className="container-full-width catalog-viewport">
        <div className="viewport-header">
          <p>Exibindo <strong>{filteredAndSortedProducts.length}</strong> motocicletas de alta performance</p>
        </div>

        {/* Exibe Skeletons (Carregamento) ou a Grid de Produtos */}
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