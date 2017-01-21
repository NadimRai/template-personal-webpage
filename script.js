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
            })
});