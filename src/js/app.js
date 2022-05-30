import webp from './lib/webp.js';
import burger from './modules/burger.js';
import moveElement from './modules/move-element.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  webp();
  burger();
  moveElement(768, '.swap-wrapp', '.swap-elem');
});