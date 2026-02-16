import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSlider = () => {
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
        effect={'fade'}
        fadeEffect={{
          crossFade: true
        }}
        speed={1200}
        autoHeight={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
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
