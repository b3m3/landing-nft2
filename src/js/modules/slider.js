import Swiper, { Navigation, Pagination } from 'swiper';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.next-slide',
    },
    breakpoints: {
      320: {
        spaceBetween: 15
      },
      768: {
        spaceBetween: 40
      },
    }
  });
};

export default slider;