import webp from './lib/webp.js';
import swiper from './modules/slider.js';
import burger from './modules/burger.js';
import moveElement from './modules/move-element.js';
import timer from './modules/timer.js';
import exploreFilter from './modules/explore-filter.js';
import fixedHeader from './modules/fixed-header.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  webp();
  swiper();
  burger();
  fixedHeader(200);
  moveElement(768, '.swap-wrapp', '.swap-elem');
  timer();
  exploreFilter();
});