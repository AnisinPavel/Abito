var swiper = new Swiper(".mySwiper", {
  spaceBetween: 6,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
        576: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    // when window width is >= 320px
    768: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 6,
  loop: true,
  thumbs: {
    swiper: swiper,
  },

});
const menuBtn =document.querySelector(".menu-button");
const menu =document.querySelector(".navbar-panel");
const menuCloseBtn =document.querySelector(".close-menu");
menuBtn.addEventListener("click", ()=>{
  menu.classList.toggle("is-open");
});
menuCloseBtn.addEventListener("click", ()=>{
  menu.classList.toggle("is-open");
});