      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 5,
                loop: true,
        thumbs: {
          swiper: swiper,
        },
      });