$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 3000,
        touch: true,
        directionNav: true,
        customDirectionNav: $(".slide_next a")
    });
});