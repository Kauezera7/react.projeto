import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Importação dos estilos obrigatórios do Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

/**
 * Componente de Banner Principal (Hero Slider)
 * Utiliza a biblioteca Swiper para criar um carrossel de impacto com efeito de fade.
 */
const HeroSlider = () => {
  // Lista de imagens para o banner (Adicionar novas imagens aqui)
  const banners = [
    { id: 1, image: '/img/Design sem nome (6).png' },
    { id: 2, image: '/img/Design sem nome (5).png' },
    { id: 3, image: '/img/Design sem nome (6).png' },
    { id: 4, image: '/img/Design sem nome (5).png' },
  ];

  return (
    <section className="hero-slider-container">
      <Swiper
        spaceBetween={0}
        effect={'fade'} // Efeito de transição suave (fade in/out)
        fadeEffect={{
          crossFade: true
        }}
        speed={1200} // Velocidade da transição em milissegundos
        autoHeight={true}
        autoplay={{
          delay: 5000, // Tempo de exibição de cada slide
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Permite clicar nas "bolinhas" de navegação
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} style={{ height: 'auto' }}>
            <div className="slide-content" style={{ height: 'auto' }}>
              <img src={banner.image} alt="Banner Shineray" className="banner-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
