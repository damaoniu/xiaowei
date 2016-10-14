// Product Carousel
declare var window:any;
declare var jQuery:any;
let $j = jQuery.noConflict();

function debouncer(func, timeout) {
    var timeoutID, timeout = timeout || 500;
    return function() {
        var scope = this,
            args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function() {
            func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
    }
}
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

// Product thumbnails carousel
export function thumbnailsCarousel(carousel) {
    carousel.slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
}

// Elevate Zoom
export function elevateZoom() {

    var windowW = window.innerWidth || document.documentElement.clientWidth;
    $j('.product-zoom').imagesLoaded(function() {
        if ($j('.product-zoom').length) {

            var zoomPosition
            if ( $j('html').css('direction').toLowerCase() == 'rtl' ) {
                zoomPosition = 11;
            }
            else {
                zoomPosition = 1
            }


            if (windowW > 767) {
                $j('.product-zoom').elevateZoom({
                    //zoomWindowHeight: $j('.product-zoom').height(), // if zoom container must be as image height
                    zoomWindowWidth: $j('.product-zoom').width()- 60,
                    zoomWindowHeight: $j('.product-zoom').width() - 60,
                    gallery: "smallGallery",
                    galleryActiveClass: 'active',
                    zoomWindowPosition	: zoomPosition
                })

            } else {
                $j(".product-zoom").elevateZoom({
                    gallery: "smallGallery",
                    zoomType: "inner",
                    galleryActiveClass: 'active',
                    zoomWindowPosition	: zoomPosition
                });
            }
        }
    })


    $j('.product-main-image > .product-main-image__zoom ').bind('click', function(){


        var galleryObj = [];
        var current = 0;
        var itemN = 0;
        var image={};

        if ($j('#smallGallery').length){
            console.log('1');
            $j('#smallGallery li a').not('.video-link').each(function() {
                if ($j(this).hasClass('active')) {
                    current = itemN;
                }
                itemN++;
                var src = $j(this).data('zoom-image'),
                    type = 'image';
                image = {};
                image ["src"] = src;
                image ["type"] = type;

                galleryObj.push(image);
            });
        }

        else {
            console.log('2');
            itemN++;
            var src = $j(this).parent().find('.product-zoom').data('zoom-image'),
                type = 'image';
            image = {};
            image ["src"] = src;
            image ["type"] = type;

            galleryObj.push(image);
        }

        $j.magnificPopup.open({
            items: galleryObj,
            gallery: {
                enabled: true,
            }
        }, current);

    });

    var  prevW = windowW;


    $j(window).resize(debouncer(function(e) {
        var currentW = window.innerWidth || $j(window).width();

        if (currentW != prevW) {
            // start resize events

            $j('.zoomContainer').remove();
            $j('.elevatezoom').removeData('elevateZoom');

            if ($j('.product-zoom').length) {
                if (currentW > 767) {
                    $j('.product-zoom').elevateZoom({
                        zoomWindowHeight: $j('.product-zoom').height(),
                        gallery: "smallGallery"
                    })
                } else {
                    $j(".product-zoom").elevateZoom({
                        gallery: "smallGallery",
                        zoomType: "inner"
                    });
                }
            }

        }

        prevW = window.innerWidth || $j(window).width();


    },0));
}
 // input-counter
export function inputCounter(){
    if ($j(".input-counter").length > 0) {
        $j('.minus-btn').click(function () {
            var $jinput = $j(this).parent().find('input');
            var count = parseInt($jinput.val()) - 1;
            count = count < 1 ? 1 : count;
            $jinput.val(count);
            $jinput.change();
            return false;
        });
        $j('.plus-btn').click(function () {
            var $jinput = $j(this).parent().find('input');
            $jinput.val(parseInt($jinput.val()) + 1);
            $jinput.change();
            return false;
        });
    }
}


// Slide Column  $j('.slide-column-close').trigger('click');
export function slideColumn(){
    if ($j('#leftColumn').length > 0) {
        $j(window).resize(function(){
            if(window.innerWidth < 992 ) {
                filtersHeight();
            } else {
                $j('#leftColumn').removeAttr('style');
            }
        });


        $j('.slide-column-close').addClass('position-fix');
        $j('.slide-column-open').on('click', function(e){
            e.preventDefault();
            $j('#leftColumn').addClass('column-open');
            $j('body').css("top", -$j('body').scrollTop());
            $j('body').addClass("no-scroll").append( '<div class="modal-filter"></div>');
            if ($j(".modal-filter").length > 0) {
                $j(".modal-filter").click(function(){
                    $j('.slide-column-close').trigger('click');
                })
            }
        });
        $j('.slide-column-close').on('click', function(e){
            e.preventDefault();
            $j("#leftColumn").removeClass('column-open');
            var top = parseInt($j('body').css("top").replace("px", ""))*-1;
            $j('body').removeAttr("style");
            $j('body').removeClass("no-scroll");
            $j('body').scrollTop(top);
            $j(".modal-filter").unbind();
            $j(".modal-filter").remove();
        });
    }

}

function filtersHeight(){
    var $obj = $j('#leftColumn');
    var w_height = window.innerHeight;
    var o_height = $obj.outerHeight();
    var delta = w_height - o_height;
    if(delta < 0) {
        $obj.css({"max-height": o_height + delta, "overflow": "auto", "overflow-x": "hidden" });
    }
}


// Category list collapse
export function expanderList() {
    $j('.expander-list .expander').each(function() {
        if ($j(this).parent('li').hasClass('active')){
            $j(this).next('ul').slideDown(0);
            $j(this).parent().addClass('open');
        }
    })
    $j(".expander-list .expander").on('click', function(e) {
        e.preventDefault;
        var speed = 300;
        var thisItem = $j(this).parent(),
            nextLevel = $j(this).next('ul');
        if (thisItem.hasClass('open')){
            thisItem.removeClass('open');
            nextLevel.slideUp(speed);
        }
        else {
            thisItem.addClass('open');
            nextLevel.slideDown(speed);
        }
    })
};


// Collapse Block (left column in listing)
export function collapseBlock() {
    $j('.collapse-block__content').each(function() {
        if ($j(this).parent('.collapse-block').hasClass('open')){
            $j(this).slideDown(0);
        }
    })
    $j('.collapse-block__title').on('click', function(e) {
        e.preventDefault;
        var speed = 300;
        var thisItem = $j(this).parent(),
            nextLevel = $j(this).next('.collapse-block__content');
        if (thisItem.hasClass('open')){
            thisItem.removeClass('open');
            nextLevel.slideUp(speed);
        }
        else {
            thisItem.addClass('open');
            nextLevel.slideDown(speed);
        }
    })
};