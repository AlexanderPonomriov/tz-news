/**
 * Created by Oleg on 13.04.2017.
 */
(function ($) {
    $(document).ready(function () {



        var openCity = false,
            adItem = $('.types-ad-item'),
            defaultCity = 'Выберите город',
            cityName;



        function openAll (target) {
            $(target).addClass('active');
            $(target).parent().next().addClass('open');
            $('.list-city-top, .arrow-top').hide();
            return openCity = true
        }
        
        function closeAll() {
            adItem.removeClass('active');
            $('.list-city').removeClass('open');
            return openCity = false
        }

        function selectedCity(target) {
            cityName = $(target).text();
            $(".selecter").text(cityName);
            $('.list-city-top, .arrow-top').hide();
        }







        $('.selecter').on('click', function () {
            $('.list-city-top, .arrow-top') .toggle();
            closeAll()
        });


        adItem.on('click', function () {

            if ( openCity === false )
            {
                openAll (this) ;
            }
            else {
                closeAll();
            }
        });

        $(".list-city-row li").on('click', function() {
            selectedCity(this);
            closeAll();
        });

        $('#removeCity').on('click', function () {
            $(".selecter").text(defaultCity);
            $('.list-city-top, .arrow-top').hide();

            closeAll();

        })


    });
})(jQuery);
