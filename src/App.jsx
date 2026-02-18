import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Sellers from './pages/Sellers';
import SellerProfile from './pages/SellerProfile';
import NotFound from './pages/NotFound';
import './App.css';

/**
 * Componente Utilitário: ScrollToTop
 * Garante que a página sempre volte ao topo (0, 0) quando o usuário navega entre rotas.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Gerenciador de Conteúdo da Aplicação
 * Define a estrutura de Layout e as Rotas.
 */
function AppContent() {
  const location = useLocation();
  
  // Verifica se a página atual é a do perfil do consultor
  // (Nesta página, o Header e Footer globais são omitidos para um design limpo estilo Linktree)
  const isConsultorPage = location.pathname.startsWith('/consultor/');

  return (
    <div className="app-container">
      {/* Reseta o scroll a cada navegação */}
      <ScrollToTop />
      
      {/* Renderiza o Header apenas se NÃO for página de consultor */}
      {!isConsultorPage && <Header />}
      
      <main className={isConsultorPage ? "" : "main-content"}>
        <Routes>
          {/* Definição de Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
          <Route path="/vendedores" element={<Sellers />} />
          <Route path="/consultor/:id" element={<SellerProfile />} />
          
          {/* Rota para páginas não encontradas (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Renderiza o Footer apenas se NÃO for página de consultor */}
      {!isConsultorPage && <Footer />}
    </div>
  );
}

/**
 * Componente Raiz da Aplicação
 * Envolve a aplicação com o Router do react-router-dom.
 */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;