document.addEventListener("DOMContentLoaded", function () {
	// initializing side nav
	$(".button-collapse").sideNav();

	$(".scrollspy").scrollSpy({
		scrollOffset:60
	});

	$('.collapsible-header').click(function(){
		
		$(".rotating-span").removeClass('open');
		$(".rotating-span").removeClass('open');
		if (!($(this).hasClass("active")))
			$(".rotating-span", this).toggleClass('open');
		else
			$(".rotating-span", this).removeClass('open');

	});
	$('.modal').modal();
		
	
})
