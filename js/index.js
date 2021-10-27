//js functions

//menu
// const menuButtonClose = document.querySelector('#mobile-menu-trigger')
// const mainHeader = document.querySelector('#main-header')

// // menuButtonClose.addEventListener('click', menuButtonOpen)

// function menuButtonOpen() {
// 	mainHeader.classList.toggle("menu-open")
// }
(function() {
    var pushState = history.pushState;
    var replaceState = history.replaceState;

    history.pushState = function() {
        pushState.apply(history, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationchange'));
    };

    history.replaceState = function() {
        replaceState.apply(history, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationchange'));
    };

    window.addEventListener('popstate', function() {
        window.dispatchEvent(new Event('locationchange'))
    });
})();



$(document).ready(function(){
	$('#mobile-menu-trigger').on("click", function(e){
		$('#main-header').toggleClass('menu-open')
	})
})


$(document).ready(function(){
	$('#name1').attr("placeholder", "NAME")
	$('#email1').attr("placeholder", "E-MAIL")
	$('.captachinput').attr("placeholder", "RECAPCTHA")
	$('input[type="password"]').attr("placeholder", "PASSWORD")
})

//LOADING
$(document).ready(function(){
	$('.loading').on("click", function(e){
		$(this).css('display', "none")
	})
	$('.loading').delay(7000).fadeOut('slow')
})



//TEXT BOX CLICk
$(document).ready(function(){
	window.addEventListener('locationchange', function(){
    console.log('location changed!', $('.text-box__item__more'));
    setTimeout(function(){
    	$('.text-box__item__more').on("click", function(e){
    		$(this).toggleClass("active")
    		console.log('clicou location')
    	})
    	$('.text-box__item h4').on("click", function(e){
    		$(this).toggleClass("active")
    	})
    }, 0)
	})
	$('.text-box__item h4').on("click", function(e){
		$(this).toggleClass("active")
	})
})

$(document).ready(function(){
	$('.text-box__item__more').on("click", function(e){
		console.log('clicou out location')
		$(this).toggleClass("active")
	})
})

//BACKGROUND-COLOR MENU
$(document).ready(function(){
	// if($('body').hasClass('woocommerce-js')){
		// $('header').css('background-color', '#0b1d1c')
		// $('main').css('background-color', '#0b1d1c')
		// $('ul#main-menu').css('background-color', '#0b1d1c')
		// $('#mobile-menu-trigger div span').css('background-color', '#0b1d1c')
		// $('footer').css('background-color', '#0b1d1c')
		// $('header').css('color', '#ffffff')
		// $('footer').css('color', '#ffffff')
		// $('footer svg').css('fill', '#ffffff')
		// $('header svg').css('fill', '#ffffff')
		// $('header h1').css('color', '#ffffff')
		// $('#main-menu li a').css('color', '#ffffff')

	// } else {
		const backgroundColor = $('main').css('background-color')
		const color = $('main').css('color')
		$('header').css('background-color', backgroundColor)
		$('ul#main-menu').css('background-color', backgroundColor)
		$('#mobile-menu-trigger div span').css('background-color', color)
		$('footer').css('background-color', backgroundColor)
		$('header').css('color', color)
		$('footer').css('color', color)
		$('footer svg').css('fill', color)
		$('header svg').css('fill', color)
		$('header h1').css('color', color)
		$('#main-menu li a').css('color', color)

	// }
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

//MENU
$(document).ready(function(){
	$(window).on('scroll', function(event) {
			const heightElement2 = window.pageYOffset
			// console.log(heightElement2)
					// console.log(heightElement)
			// if ($(window).width() > 1600) {
			// 	if ($(window).height() > 1500) {
			// 		$('.arrow').css('display', "none")
			// 	}
			// }
			// if ($(window).width() < 1600) {
				if (heightElement2 > 150) {
					$('header').addClass('header-animation-small')
					$('header').removeClass('header-animation-bigger')
				} else {
					$('header').removeClass('header-animation-small')
					$('header').addClass('header-animation-bigger')
				} 
			// }
		})
})


$(document).ready(function(){
	$('#calendar_booking1 .datepick-header span').text('oct');
	console.log(	$('.datepick-header span').text('oct'))
});






