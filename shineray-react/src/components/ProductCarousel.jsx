import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="productSwiper"
      >
        {productsData.map((product, index) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
