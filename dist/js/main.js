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
});