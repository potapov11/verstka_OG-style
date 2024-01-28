import { auto } from "@popperjs/core";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: auto,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".slider-bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperGoods = new Swiper(".slider-goods", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".slider-goods__arrow-left",
    prevEl: ".slider-goods__arrow-right",
  },
});
