/**
 * Created by Oleg on 31.03.2017.
 */

(function ($) {

    $(document).ready(function () {



        var iconClose       = false, //nid for changed icons menu on close icon
            allMenuBlock    = $('.sidebar-main, .sidebar-sub, .sidebar-address, .download-price'),
            maxWith         = 1600,
            Indentation     = 36,
            modal           = $('.modal-box'),
            opnBtn          = $('.callback-btn'),
            closeBtn        = $('.modal-close'),
            upBtn           = $('#up-btn'),
            count           = $('.page').length,
            pageIndex,
            startPage;






        /* ---------------------------------------------- /*
        * Up button
       /* ---------------------------------------------- */

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100 && screen.width >= 768) {
                if (upBtn.is(':hidden')) {
                    upBtn.css({opacity : 1}).fadeIn('slow');
                }
            } else { $('#up-btn').stop(true, false).fadeOut('fast'); }
        });
        upBtn.click(function() {
            $('html, body').stop().animate({scrollTop : 0}, 300);
        });

// Changes the indentation for a width greater than 1600
        function windowSize(){

            if ($(window).width() >= '1600'){
                var  dd  = $(window).width() - maxWith + Indentation;

                $('.up-btn').css({right : dd + 'px'});
                console.log()
            } else {
                $('.up-btn').css({right : '36px'});
            }
        }

        $(window).ready(windowSize);
        $(window).resize(windowSize);
/* ---------------------------------------------- /*
 * menu show
/* ---------------------------------------------- */

        $('.menu-btn').on('click', function () {
            allMenuBlock.removeClass('open');   //remove added classes
            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            $('.sidebar-main, .sidebar-sub, .download-price').addClass('open'); //shows the desired menu item
        });

        $('.phone-btn').on('click', function () {
            allMenuBlock.removeClass('open');//remove added classes
            $('.sidebar, .bg-sidebar').toggleClass('open-sidebar');  //open sidebar
            $('address ').addClass('open');  //shows the desired menu item
        });



/* ---------------------------------------------- /*
 * button menu Changed on close
 /* ---------------------------------------------- */

        $(".menu-btn, .phone-btn").on('click', function(e) {
            e.preventDefault();
            if (iconClose == false){
                $(this).addClass('active');
                iconClose = true
            }
            else {
                $('.menu-btn, .phone-btn').removeClass('active');
                iconClose = false
            }
        });

/* ---------------------------------------------- /*
 * Nav active link
 /* ---------------------------------------------- */


        $(".navbar .navbar-list a ").click(function(e) {
            e.preventDefault();
            $(".navbar .navbar-list a").removeClass('active');
            $(this).addClass('active');
        });

/* ---------------------------------------------- /*
 *  Pop up
/* ---------------------------------------------- */

        opnBtn.on('click', function() {
            modal.css('display', 'block');
        });
        closeBtn.on('click', function() {
            modal.css('display', 'none');
        });


/* ---------------------------------------------- /*
* Slider
/* ----------------------------------------- */



        $('.news-slider').slick({
            infinite: false,
            touchMove: false,
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow')
        });


        function slidPage() {
            pageIndex = $('.page.slick-active').index()+1;

            startPage = (pageIndex + '/' + count);

            $('.slick-pag').text(startPage)

        }

        slidPage();


        $('.slick-arrow').on('click', function () {
            slidPage()
        });


/* ---------------------------------------------- /*
*  Carousel footer
/* ---------------------------------------------- */

        $('.responsive-carousel').slick({
            dots: true,

            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 2,
            prevArrow: $('.prev-item'),
            nextArrow: $('.next-item'),
            customPaging : function( i) {

                return '<a class="slide"></a>';
            },
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });




    });
})(jQuery);





