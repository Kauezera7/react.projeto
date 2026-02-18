import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductCarousel from '../components/ProductCarousel';
import { ShieldCheck, CreditCard, Wrench, ChevronRight, ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Config } from '../data/config';

/**
 * Página Inicial (Home)
 * Composta por seções estratégicas para conversão e apresentação da marca.
 */
const Home = () => {
  return (
    <div className="home-page">
      {/* 1. BANNER PRINCIPAL (Hero) - Destaques visuais e promoções */}
      <HeroSlider />

      {/* 2. BARRA DE CHAMADA (CTA) - Link rápido para o catálogo completo */}
      <section className="catalog-cta-standard">
        <div className="container-full-width">
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

      {/* 3. PRODUTOS EM DESTAQUE - Carrossel dinâmico de modelos principais */}
      <section className="featured-products">
        <div className="container-full-width">
          <div className="section-header">
            <span className="section-subtitle">Nossa Vitrine</span>
            <h2>Catálogo em <span className="highlight">Destaque</span></h2>
            <p>Conheça os modelos mais desejados da Shineray Colombo.</p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* 4. DIFERENCIAIS E SERVIÇOS - Apresentação do Pós-Venda, Financiamento e Oficina */}
      <section className="premium-services" id="sobre">
        <div className="container-full-width">
          <div className="section-header">
            <span className="section-subtitle">Diferenciais Shineray</span>
            <h2>Excelência em <span className="highlight">cada detalhe</span></h2>
            <p>Compromisso com a qualidade e sua satisfação em primeiro lugar.</p>
          </div>

          <div className="services-grid">
            {/* Pós-Venda */}
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

            {/* Financiamento */}
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

            {/* Oficina */}
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

      {/* 5. LOCALIZAÇÃO E CONTATO - Mapa interativo e informações físicas da loja */}
      <section id="location" className="location-section">
        <div className="container-full-width">
          <div className="location-grid">
            {/* Informações de Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="location-info"
            >
              <span className="section-subtitle">Nossa Loja</span>
              <h2>Venha nos <span className="highlight">Visitar</span></h2>
              <p className="location-desc">Visite nossa concessionária e faça um test-ride. Temos toda a linha Shineray a pronta entrega com as melhores condições de Colombo e região.</p>
              
              <div className="info-list-premium">
                <div className="info-item-premium">
                  <div className="info-icon-box">
                    <MapPin size={22} />
                  </div>
                  <div className="info-text">
                    <h3>Endereço</h3>
                    <p>{Config.endereco.rua}<br />{Config.endereco.bairroCidade}</p>
                  </div>
                </div>
                
                <div className="info-item-premium">
                  <div className="info-icon-box">
                    <Clock size={22} />
                  </div>
                  <div className="info-text">
                    <h3>Atendimento</h3>
                    <p>Segunda a Sexta: 08h às 18h<br />Sábado: 08h às 13h</p>
                  </div>
                </div>

                <div className="info-item-premium">
                  <div className="info-icon-box">
                    <Phone size={22} />
                  </div>
                  <div className="info-text">
                    <h3>Contatos</h3>
                    <p>{Config.contato.telefone.formatado}<br />{Config.contato.email}</p>
                  </div>
                </div>
              </div>

              <div className="location-actions-premium">
                <a href={Config.endereco.linkGoogleMaps} target="_blank" rel="noopener noreferrer" className="btn-outline-directions">
                  Como Chegar
                </a>
              </div>
            </motion.div>

            {/* Mapa (Iframe Google Maps) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="location-map-container"
            >
              <div className="map-frame">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.417244583163!2d-49.1896898!3d-25.3702179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce665123d9a1d%3A0x66f68e0d40523048!2sR.%20Pasteur%2C%20220%20-%20Maracan%C3%A3%2C%20Colombo%20-%20PR%2C%2083408-410!5e0!3m2!1spt-BR!2sbr!4v1738072800000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
