//js functions

//menu
const menuButtonClose = document.querySelector('#mobile-menu-trigger')
const mainHeader = document.querySelector('#main-header')

// menuButtonClose.addEventListener('click', menuButtonOpen)

function menuButtonOpen() {
	mainHeader.classList.toggle("menu-open")
}




//LOADING
$(document).ready(function(){
	$('.loading').delay(10000).fadeOut('slow')
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

	$('#main-menu li a').css('color', color)
})





