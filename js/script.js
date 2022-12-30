var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    //slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    //loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        992:{
            slidesPerView: 3,
        },
        1400:{
            slidesPerView: 4,
        },
    },
});
