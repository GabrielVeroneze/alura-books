const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 10,
});

