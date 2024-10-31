class Carousel  {
  constructor(name, btnLeft, btnRight){
    this.name = name,
    this.btnLeft = btnLeft,
    this.btnRight = btnRight
  }

  initializeCarousel(){
    const swiper = new Swiper(`${this.name}`, {
      direction: "horizontal",
      spaceBetween: 30,
      navigation: {
        nextEl: `${this.btnRight}`,
        prevEl: `${this.btnLeft}`,
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
}

export default Carousel