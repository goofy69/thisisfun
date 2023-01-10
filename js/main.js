
(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, 
        mailChimpURL   : 'https://gmail.us21.list-manage.com/subscribe/post?u=3af5f2d37797e4c251c8f83bc&amp;id=1bd1cd4b6e&amp;f_id=00b9c0e1f0'
    },

    $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   var clPreloader = function() {
        $("html").addClass('cl-preload');
        $WIN.on('load', function() { 
            $("#loader").fadeOut("slow", function() {
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');
        
        });
    };


   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };
   /* Animate On Scroll
    * ------------------------------------------------------ */
    var clAOS = function() {
        
        AOS.init( {
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };

    (function ssInit() {
        
        clPreloader();
        clSmoothScroll();
        clAOS();

    })();
        
        
})(jQuery);