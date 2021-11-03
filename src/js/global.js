$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 16,
    items: 3,
    nav: true,
    center: true,
    dots: false,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ['<div class="owl-prev prevv"><span>previous</span></div>', '<div class="owl-next nextt"><span>next</span></div>'],
    responsive : {
      0 : {
          items: 1
      },
      600 : {
          items: 3
      },
      1200 : {
        items: 3
      },
    },
  });
});