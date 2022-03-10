$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scrol load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});
