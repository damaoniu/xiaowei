// Product Carousel
declare var window:any;
declare var jQuery:any;
declare var noUiSlider:any;
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

// Price Slider initialize
export function priceSlider() {

    if ($j('.price-slider').length) {

        var priceSlider = $j('#priceSlider').get(0);

        noUiSlider.create(priceSlider, {
            start: [100, 900],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 1000
            }
        });

        var inputPriceMax = $j('#priceMax');
        var inputPriceMin = $j('#priceMin');

        priceSlider.noUiSlider.on('update', function( values, handle ) {

            var value = values[handle];

            if ( handle ) {
                inputPriceMax.val(value);
            } else {
                inputPriceMin.val(value);
            }
        });

        inputPriceMax.on('change', function(){
            priceSlider.noUiSlider.set([null, this.value]);
        });
        inputPriceMin.on('change', function(){
            priceSlider.noUiSlider.set([this.value, null]);
        });
    };
}



// Listing view mode
export  function listingModeToggle() {
    if ($j('a.link-row-view').length) {
        $j('a.link-row-view').on('click', function(e) {
            e.preventDefault();
            $j(this).addClass('active');
            $j('a.link-grid-view').removeClass('active');
            $j('.product-listing').addClass('row-view');
        })
    }
    if ($j('a.link-row-view').length) {

        $j('a.link-grid-view').on('click', function(e) {
            e.preventDefault();
            $j(this).addClass('active');
            $j('a.link-row-view').removeClass('active');
            $j('.product-listing').removeClass('row-view');
        })
    }
}