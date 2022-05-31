import webp from './lib/webp.js';
import swiper from './modules/slider.js';
import burger from './modules/burger.js';
import moveElement from './modules/move-element.js';
import timer from './modules/timer.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  webp();
  swiper();
  burger();
  moveElement(768, '.swap-wrapp', '.swap-elem');
  timer();
});