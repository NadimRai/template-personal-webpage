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
});