$(document).ready(function(){
  $('.filter-content').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.filter-menu ul li').click(function(){
    $('.filter-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.filter-content').isotope({
      filter: selector
    })
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin: 10,
    nav:true,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });
  $('a[data-rel^=lightcase]').lightcase();
  
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".s2").mousemove(function(e){
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 + 50;
    var newvalueY = height * pageY * -1 - 100;
    $('.s2').css("background-position", newvalueX+"px     "+newvalueY+"px");
  });
});