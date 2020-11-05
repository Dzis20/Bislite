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


var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
