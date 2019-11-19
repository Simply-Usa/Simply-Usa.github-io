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
	$(".s2, .s4, .s5").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 + 50;
		var newvalueY = height * pageY * -1 - 100;
		$('.s2, .s4').css("background-position", newvalueX+"px    "+newvalueY+"px");
		var pageX = e.pageX - ($(window).width() / 2000);
		var pageY = e.pageY - ($(window).height() / 2000);
		$('.listik').css({
			"left": newvalueX - 70 + "px",
			"top": newvalueY+ 800 +"px"
		});
		$('.listik-2').css({
			"right": newvalueX  + "px",
			"top": newvalueY + 600 +"px"
		});
		
	});
	$(".menu ul").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	if($(window).width() < 1200){
		$('.menu .toggle-menu').click(function(){
			$('.menu .menu-wrap').slideToggle(300);
		});
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".toggle-menu"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.menu .menu-wrap').slideUp(); // скрываем его
			}
		});
	}
});