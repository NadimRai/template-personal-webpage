$(document).ready(function(){
    $('.navicon').click(function(){
        $('.nav').slideToggle();
    })
    $(window).bind('resize', function () {
        if ($('.navicon').css('display') == "none") {
            $('.nav').show();
        } else {
            $('.nav').hide();
        }
    });

    $('.nav li a').click(function (event) {
        event.preventDefault();

        var sectionId = $(this).attr('href');
        var fromTop = $(sectionId).offset().top;
        $('html, body').animate({
            scrollTop: fromTop
        }, 1000);

        if ($('.navicon').css('display') == 'block') {
            $('.nav').slideUp();
        }
    });

    $(window).scroll(function () {
        $('.section').each(function () {
            var fromTop = $(this).offset().top;
            console.log(fromTop);
            if (window.scrollY >= (fromTop+ 90 )) {
                $(this).addClass('fixPoint');
            } else {
                $(this).removeClass('fixPoint');
            }
            
        })
    });

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 2400) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    

});