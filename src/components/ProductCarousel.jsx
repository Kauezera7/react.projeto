import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Ícones SVG solicitados
const CaretLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg>
);

const CaretRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg>
);

const ProductCarousel = () => {
  return (
    <div className="product-carousel-container-outer">
      <button className="custom-swiper-btn prev-btn" id="featured-prev">
        <CaretLeft />
      </button>

      <div className="product-carousel-inner">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '#featured-next',
            prevEl: '#featured-prev',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
            1600: { slidesPerView: 5, spaceBetween: 30 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="productSwiper"
        >
          {productsData.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="custom-swiper-btn next-btn" id="featured-next">
        <CaretRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
