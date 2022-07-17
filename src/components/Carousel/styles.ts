import styled from 'styled-components';
import { Swiper as SwiperCarousel } from 'swiper/react';

export const Swiper = styled(SwiperCarousel)`
  width: 100%;
  padding: 0 2rem;

  .swiper-button-next {
    background-image: url('https://cdn-icons-png.flaticon.com/512/566/566006.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    transform: rotate(90deg);

    z-index: 10;
    right: 0;
  }

  .swiper-button-prev {
    background-image: url('https://cdn-icons-png.flaticon.com/512/566/566006.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    transform: rotate(-90deg);

    z-index: 10;
    left: 0;
  }

  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .swiper-pagination-bullets {
    display: none;
  }
`;