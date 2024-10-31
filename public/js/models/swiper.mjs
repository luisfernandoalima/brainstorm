export function initializeCarousel() {
  const sliderLugaresProximos = new Swiper("#slider-lugares-proximos", {
    direction: "horizontal",
    spaceBetween: 30,
    navigation: {
      nextEl: "#slider-lugares-proximos-btn-right",
      prevEl: "#slider-lugares-proximos-btn-left",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      // quando a largura da tela for >= 480px
      480: {
        slidesPerView: 3,
      },
      // quando a largura da tela for >= 768px
      768: {
        slidesPerView: 4,
      },
      // quando a largura da tela for >= 1024px
      1024: {
        slidesPerView: 4,
      },
    },
  });
  const sliderUltimasSalas = new Swiper("#slider-ultimas-salas", {
    direction: "horizontal",
    spaceBetween: 30,
    navigation: {
      nextEl: "#slider-ultimas-salas-btn-right",
      prevEl: "#slider-ultimas-salas-btn-left",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      // quando a largura da tela for >= 480px
      480: {
        slidesPerView: 3,
      },
      // quando a largura da tela for >= 768px
      768: {
        slidesPerView: 4,
      },
      // quando a largura da tela for >= 1024px
      1024: {
        slidesPerView: 4,
      },
    },
  });
}
