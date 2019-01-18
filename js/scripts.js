$(document).ready(function(){
	$('.header-mobile-button').on('click', function(e){
		e.preventDefault();
		$('.header-nav-list').parent().toggleClass('open');
	})
	$(window).click(function() {
		$('.header-mobile-button').parent().removeClass('open');
	});
	$('.header-mobile-button, .header-nav-list').click(function(event){
	    event.stopPropagation();
	});
});