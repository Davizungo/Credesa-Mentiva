jQuery('document').ready(function($){

	var menuBtn = $('.menu-icon'),
		menu = $('.botones a');

	menuBtn.click(function(){

		if( menu.hasClass('show')){

			menu.removeClass('show');
		} else {
			menu.addClass('show')
		}

	});

});