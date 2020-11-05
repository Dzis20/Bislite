$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.slide-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

 $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

