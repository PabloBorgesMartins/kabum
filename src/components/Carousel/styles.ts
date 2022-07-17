import styled from 'styled-components';
import { Swiper as SwiperCarousel } from 'swiper/react';

export const Swiper = styled(SwiperCarousel)`
  width: 100%;
  padding: 0 2rem;

  .swiper-button-next {
    background-image: url('/icons/chevron-right.svg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    width: 1.25rem;
    right: .25rem;
  }

  .swiper-button-prev {
    background-image: url('/icons/chevron-left.svg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    width: 1.25rem;
    left: .25rem;
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