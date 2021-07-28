      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 6,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 6,
                loop: true,
        thumbs: {
          swiper: swiper,
        },
      });