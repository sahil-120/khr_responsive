$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})