import Swiper, { Navigation, Pagination, Parallax } from 'swiper';

const slider = () => {
  const swiperIntro = new Swiper('.slider-intro', {
    modules: [Navigation, Pagination, Parallax],
    loop: true,
    speed: 600,
    parallax: true,
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

  const swiperTrending = new Swiper('.slider-trending', {
    modules: [Navigation, Pagination, Parallax],
    loop: true,
    speed: 600,
    parallax: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.header-trending__arrows-next',
      prevEl: '.header-trending__arrows-prev'
    },
  });
};

export default slider;