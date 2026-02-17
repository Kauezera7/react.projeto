import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { 
  MessageCircle, ArrowLeft, ShieldCheck, 
  Zap, Bike, Fuel, Gauge, CreditCard,
  Settings, Activity, ClipboardList, Heart
} from 'lucide-react';
import { productsData } from '../data/products';
import { Config } from '../data/config';
import ProductCard from '../components/ProductCard';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const found = productsData.find(p => p.slug === slug);
    if (found) {
      setProduct(found);
      setActiveImage(found.mainImage);
      
      // Sugestões: Filtra motos diferentes da atual e embaralha
      const related = productsData
        .filter(p => p.slug !== slug)
        .sort(() => 0.5 - Math.random());
      setRelatedProducts(related);
      
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!product) return <div className="loading-state">Carregando...</div>;

  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de mais informações sobre a *${product.name}* que vi no site.`);
  const whatsappLink = `https://wa.me/${Config.contato.whatsapp.numero}?text=${whatsappMessage}`;

  return (
    <div className="premium-pd">
      <div className="container-full-width">
        {/* NAVEGAÇÃO */}
        <div className="pd-nav">
          <button onClick={() => navigate(-1)} className="btn-back-link">
            <ArrowLeft size={16} /> Voltar para Coleção
          </button>
        </div>

        {/* 1. SEÇÃO PRINCIPAL */}
        <div className="pd-main-section">
          <div className="pd-visual">
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="pd-image-frame"
            >
              <img src={activeImage} alt={product.name} />
            </motion.div>
            <div className="pd-gallery-nav">
              {(product.thumbnails || [product.mainImage]).map((img, idx) => (
                <button 
                  key={idx} 
                  className={`gallery-item ${activeImage === img ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt="mini" />
                </button>
              ))}
            </div>
          </div>

          <div className="pd-summary">
            <span className="brand-label">{product.brand}</span>
            <h1 className="title-name">{product.name}</h1>
            
            <div className="price-box-premium">
              <span className="label">Preço Sugerido</span>
              <h2 className="price">{product.price}</h2>
              <div className="finance-tag">
                <CreditCard size={16} /> Parcelas de <strong>{product.installment.split('de')[1]}</strong>
              </div>
            </div>

            <div className="cta-buttons">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-main-whatsapp">
                <MessageCircle size={20} /> Falar com Consultor
              </a>
              <button className="btn-secondary-finance">Simular Financiamento</button>
            </div>
          </div>
        </div>

        {/* 2. DASHBOARD DE DESTAQUES */}
        <section className="pd-highlights-section">
          <div className="section-title-premium">
            <Activity size={24} />
            <h2>Destaques de <span className="highlight">Performance</span></h2>
          </div>
          <div className="highlights-dashboard">
            <div className="h-card">
              <Gauge size={32} />
              <div className="h-info">
                <strong>{product.specifications.Cilindrada || '---'}</strong>
                <span>Cilindrada total</span>
              </div>
            </div>
            <div className="h-card">
              <Fuel size={32} />
              <div className="h-info">
                <strong>{product.fuel}</strong>
                <span>Combustível</span>
              </div>
            </div>
            <div className="h-card">
              <ShieldCheck size={32} />
              <div className="h-info">
                <strong>Segurança</strong>
                <span>ABS/CBS de série</span>
              </div>
            </div>
            <div className="h-card">
              <Zap size={32} />
              <div className="h-info">
                <strong>Eficiência</strong>
                <span>Tecnologia ECO</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FICHA TÉCNICA */}
        <section className="pd-technical-section">
          <div className="section-title-premium">
            <ClipboardList size={24} />
            <h2>Ficha <span className="highlight">Técnica</span></h2>
          </div>
          <div className="technical-grid-full">
            {Object.entries(product.specifications).map(([key, val]) => (
              <div key={key} className="tech-row-premium">
                <div className="tech-key">
                   <Settings size={14} />
                   <span>{key}</span>
                </div>
                <div className="tech-val">{val}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CARROSSEL DE SUGESTÕES (MAIS PROFISSIONAL) */}
        <section className="related-section-carousel">
          <div className="section-title-premium">
            <Heart size={24} className="icon-red" />
            <h2>Motos que você <span className="highlight">pode gostar</span></h2>
          </div>
          
          <div className="related-carousel-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
                1600: { slidesPerView: 5 }
              }}
              className="relatedSwiper"
            >
              {relatedProducts.map((relProduct, index) => (
                <SwiperSlide key={relProduct.id}>
                  <ProductCard product={relProduct} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;