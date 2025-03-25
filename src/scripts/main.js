'use strict';

const wall = document.querySelector('.wall').getBoundingClientRect();
const spider = document.querySelector('.spider');

spider.getBoundingClientRect();

spider.style.top = `${wall.height / 2 - spider.height / 2}px`;
spider.style.left = `${wall.width / 2 - spider.width / 2}px`;
