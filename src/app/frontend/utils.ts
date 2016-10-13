// Product Carousel
declare var window:any;
declare var jQuery:any;
let $j = jQuery.noConflict();
// Fix z-index problem on carousel hover
function fixCarouselHover(carousel) {
    carousel.find('.slick-slide').bind( "mouseenter mouseleave",
        function( event ){
            $j(this).closest('.slick-slider').toggleClass('hover');
        }
    );
};
export  function productCarousel(carousel,numberXl,numberLg,numberMd,numberSm,numberXs) {

    var windowW = window.innerWidth || $j(window).width();

    var slidesToShowXl = (numberXl > 0) ? numberXl : 6;
    var slidesToShowLg = (numberLg > 0) ? numberLg : 4;
    var slidesToShowMd = (numberMd > 0) ? numberMd : numberLg;
    var slidesToShowSm = (numberSm > 0) ? numberSm : numberMd;
    var slidesToShowXs = (numberXs > 0) ? numberXs : 1;

    var carousel = carousel;
    var speed = 500;

    if (carousel.parent().find('.carousel-products__button').length > 0) {

        carousel.slick({
            prevArrow: carousel.parent().find('.carousel-products__button .btn-prev'),
            nextArrow: carousel.parent().find('.carousel-products__button .btn-next'),
            dots: true,
            slidesToShow: slidesToShowXl,
            slidesToScroll: slidesToShowXl,
            responsive: [{
                breakpoint: 1770,
                settings: {
                    slidesToShow: slidesToShowLg,
                    slidesToScroll: slidesToShowLg
                }
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesToShowMd,
                    slidesToScroll: slidesToShowMd
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShowSm,
                    slidesToScroll: slidesToShowSm
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: slidesToShowXs,
                    slidesToScroll: slidesToShowXs
                }
            }]
        });
    }
    else {
        carousel.slick({
            slidesToShow: slidesToShowXl,
            slidesToScroll: 1,
            speed: speed,
            responsive: [{
                breakpoint: 1770,
                settings: {
                    slidesToShow: slidesToShowLg,
                    slidesToScroll: slidesToShowLg
                }
            },{
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesToShowMd,
                    slidesToScroll: slidesToShowMd
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: slidesToShowSm,
                    slidesToScroll: slidesToShowSm
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: slidesToShowXs,
                    slidesToScroll: slidesToShowXs
                }
            }]
        });
    }


    fixCarouselHover(carousel);

};
 // Vertical carousel
export function verticalCarousel(carousel, slidesToShow) {
    var slidesToShow = (slidesToShow > 0) ? slidesToShow : 2;
    carousel.slick({
        infinite: false,
        dots: false,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        vertical: true
    });
}

// Brands carousel
export  function brandsCarousel(carousel) {
    carousel.slick({
        infinite: true,
        dots: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [{
            breakpoint: 1770,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6
            }
        },{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
    });
}

// bannerAsid carousel
export  function bannerAsid(carousel) {
    carousel.slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}


// bannerAsid carousel
export  function testimonialsAsid(carousel) {
    carousel.slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

// Category carousel

export  function bannerCarousel(carousel) {
    carousel.slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
}


// Category carousel
export function bannerCarouselShort(carousel) {
    carousel.slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
}
