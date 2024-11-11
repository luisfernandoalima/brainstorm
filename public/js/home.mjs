import Carousel from "./models/Swiper.mjs";

// Slider para Lugares Próximos
const sliderLugaresProximos = new Carousel(
  "#slider-lugares-proximos",
  "#slider-lugares-proximos-btn-left",
  "#slider-lugares-proximos-btn-right"
);

sliderLugaresProximos.initializeCarousel();

const sliderUltimasSalas = new Carousel(
    "#slider-ultimas-salas",
    "#slider-ultimas-salas-btn-left",
    "#slider-ultimas-salas-btn-right"
)

sliderUltimasSalas.initializeCarousel()
