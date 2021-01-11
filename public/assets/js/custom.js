
$('#review_carousel').owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        200:{
            items:1,
            nav:true
        }
    }
})



$(window).scroll(function() {
    var sticky = $('.header'),
      scroll = $(window).scrollTop();
     
    if (scroll >= 85) { 
      sticky.addClass('fixed'); }
    else { 
     sticky.removeClass('fixed');
  
  }
});

