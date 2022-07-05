const swiper = new Swiper('.header__in', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    initialSlide: 1,
    centeredSlides: true,
    //slideToClickedSlide: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        scale: 0.8,
        stretch: 70,
        slideShadows: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        500: {
          slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
            coverflowEffect: {
                stretch: 70,
            },
        },
    }
});
