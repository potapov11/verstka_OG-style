import { auto } from "@popperjs/core";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: auto,
  spaceBetween: 30,
  loop: true,
  autoplay: true,

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
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".slider-goods__arrow-left",
    prevEl: ".slider-goods__arrow-right",
  },

  breakpoints: {
    600: {
      // When the window width is 600 or more
      slidesPerView: 2,
    },
    800: {
      // When the window width is 960 or more
      slidesPerView: 3,
    },
    1000: {
      // When the window width is 960 or more
      slidesPerView: 4,
    },
  },
});
