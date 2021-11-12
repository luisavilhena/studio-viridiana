//js functions
//create location change

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

//CAROUSEL
$(document).ready(function(){
  $('.carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  speed: 2000,
	  autoplaySpeed: 2000,
	  dots: true,
	  adaptiveHeight: true,
  });
});

//CONTACT
$(document).ready(function(){
	$('.wpcf7-radio .wpcf7-list-item').on("click", function(e){
		if ($('.wpcf7-radio .wpcf7-list-item').hasClass("structure-color-black")) {
			$('.wpcf7-radio .wpcf7-list-item').removeClass("structure-color-black")
			$(this).toggleClass('structure-color-black')
		} else {
			$(this).toggleClass('structure-color-black')
		}
  })
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
	if($('.text-box__item__more a')){
		$('.text-box__item__more').on("click", function(e){x
			$(this).removeClass("active")
		})
	}

})

//BACKGROUND-COLOR MENU
$(document).ready(function(){
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
	$(function() {
	  $('.arrow').click(function(e) {
	  	const heightElement = window.pageYOffset
	      $('html, body').animate({ scrollTop: $('html').offset().top  + heightElement + 600}, 1000);
	  });
	});
})

//MENU
$(document).ready(function(){
	$(window).on('scroll', function(event) {
			const heightElement2 = window.pageYOffset
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







