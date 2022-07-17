import { Navigation } from 'swiper';
import {SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { swiperBreakpointsOptions } from '../../utils/swiperBreakpointsOptions';
import { IProduct } from '../../interfaces/product';
import { ProductCard } from '../ProductCard';
import { Swiper } from './styles'

interface CarouselProps {
  products: IProduct[];
}

export function Carousel({ products }: CarouselProps) {

  return (
    <Swiper
      slidesPerView={"auto"}
      modules={[Navigation]}
      breakpoints={swiperBreakpointsOptions}
      className="mySwiper"
      loop={true}
      navigation
      draggable="false"
      scrollbar={{ draggable: false }}
    >
      {
        products.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard

              product={product}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}