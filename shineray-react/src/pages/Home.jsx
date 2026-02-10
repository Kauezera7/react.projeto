import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductCarousel from '../components/ProductCarousel';
import { ShieldCheck, CreditCard, Wrench, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Config } from '../data/config';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. BANNER PRINCIPAL */}
      <HeroSlider />

      {/* 2. BARRA DE CTA COMERCIAL PROFISSIONAL */}
      <section className="catalog-cta-standard">
        <div className="container">
          <div className="cta-standard-grid">
            <div className="cta-info">
              <h3>Toda a linha Shineray 2025</h3>
              <p>Confira preços, fichas técnicas e condições exclusivas de financiamento.</p>
            </div>
            <Link to="/catalogo" className="btn-catalog-red">
              Ver Catálogo Completo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PRODUTOS DESTAQUE */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nossa Vitrine</span>
            <h2>Produtos em <span className="highlight">Destaque</span></h2>
            <p>Conheça os modelos mais desejados da Shineray Colombo.</p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="premium-services" id="sobre">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Diferenciais Shineray</span>
            <h2>Excelência em <span className="highlight">cada detalhe</span></h2>
            <p>Compromisso com a qualidade e sua satisfação em primeiro lugar.</p>
          </div>

          <div className="services-grid">
            <motion.div whileHover={{ y: -10 }} className="service-card">
              <div className="service-image">
                <img src="/img/pos-venda.jpeg" alt="Pós-Venda" />
                <div className="service-icon-floating"><ShieldCheck size={24} /></div>
              </div>
              <div className="service-info">
                <div>
                  <h3>Pós-Venda Completo</h3>
                  <p>Um time de especialistas dedicado a cuidar de você e sua moto após a conquista.</p>
                </div>
                <a href={`https://wa.me/${Config.contato.whatsapp.numero}`} className="service-link">
                  Falar com suporte <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="service-card">
              <div className="service-image">
                <img src="/img/finacimento.jpeg" alt="Financiamento" />
                <div className="service-icon-floating"><CreditCard size={24} /></div>
              </div>
              <div className="service-info">
                <div>
                  <h3>Crédito Facilitado</h3>
                  <p>As melhores condições e taxas exclusivas para você sair de Shineray zero km hoje.</p>
                </div>
                <a href={`https://wa.me/${Config.contato.whatsapp.numero}`} className="service-link">
                  Simular agora <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="service-card">
              <div className="service-image">
                <img src="/img/oficina-shineray.jpeg" alt="Oficina" />
                <div className="service-icon-floating"><Wrench size={24} /></div>
              </div>
              <div className="service-info">
                <div>
                  <h3>Oficina Premium</h3>
                  <p>Equipamentos de última geração e peças originais para manter sua moto sempre nova.</p>
                </div>
                <a href={`https://wa.me/${Config.contato.whatsapp.numero}`} className="service-link">
                  Agendar serviço <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;