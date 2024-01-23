import { auto } from "@popperjs/core";

var swiper = new Swiper(".swiper-container", {
  slidesPerView: auto,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
