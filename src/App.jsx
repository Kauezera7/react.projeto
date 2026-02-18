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

// Componente para scroll automático
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isConsultorPage = location.pathname.startsWith('/consultor/');

  return (
    <div className="app-container">
      <ScrollToTop />
      {!isConsultorPage && <Header />}
      <main className={isConsultorPage ? "" : "main-content"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
          <Route path="/vendedores" element={<Sellers />} />
          <Route path="/consultor/:id" element={<SellerProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isConsultorPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;