//js functions

//menu
const menuButtonClose = document.querySelector('#mobile-menu-trigger')
const mainHeader = document.querySelector('#main-header')

// menuButtonClose.addEventListener('click', menuButtonOpen)

function menuButtonOpen() {
	mainHeader.classList.toggle("menu-open")
}


$(document).ready(function(){
	$('#name1').attr("placeholder", "NAME")
	$('#email1').attr("placeholder", "E-MAIL")
	$('.captachinput').attr("placeholder", "RECAPCTHA")
	$('input[type="password"]').attr("placeholder", "PASSWORD")
})

//LOADING
$(document).ready(function(){
	$('.loading').delay(7000).fadeOut('slow')
})


//TEXT BOX CLICk
$(document).ready(function(){
	$('.text-box__item__more').on("click", function(e){
		$(this).toggleClass("active")
	})
})

//BACKGROUND-COLOR MENU
$(document).ready(function(){
	const backgroundColor = $('main').css('background-color')
	const color = $('main').css('color')
	$('header').css('background-color', backgroundColor)
	$('footer').css('background-color', backgroundColor)
	$('header').css('color', color)
	$('footer').css('color', color)
	$('footer svg').css('fill', color)
	$('header svg').css('fill', color)
	$('header h1').css('color', color)

	$('#main-menu li a').css('color', color)
})

//ABOUT SCROLL
$(document).ready(function(){
		// 	var sc = $(window).scrollTop();
		// console.log(sc)
	$(function() {
	  $('.arrow').click(function(e) {
	  	const heightElement = window.pageYOffset
	  	// const heightWindow = $(window).height()
	  	// console.log(heightElement)
	      $('html, body').animate({ scrollTop: $('html').offset().top  + heightElement + 600}, 1000);
	      // console.log() 
	      // console.log(heightElement,  $('html').offset().top,  $('html').offset().top + heightElement) 
	  });
	});
})
// $(document).ready(function(){


// 	$(window).on('scroll', function(event) {
// 		const heightElement2 = window.pageYOffset
// 		console.log(heightElement2)
// 				// console.log(heightElement)
// 		// if ($(window).width() > 1600) {
// 		// 	if ($(window).height() > 1500) {
// 		// 		$('.arrow').css('display', "none")
// 		// 	}
// 		// }
// 		// if ($(window).width() < 1600) {
// 			if (heightElement2 > 1700) {
// 				$('.arrow').css('display', "none")
// 			}
// 		// }
// 	})
// });






