/**--=========================================Author : groupe legrandsoft ===================================
===========================================site : legrandsoft.com=======================================*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
//owl-carrousel animate end here 
$(document).ready(function(){
  $("button").click((function{
    $("img").animate({
      left: "250px",
      opacity: "0.5",
      height: "150px",
      width: "150px"
    });
  }));
});


