$(document).ready(function(){
	function getHeight(){
		if($(window).width() <= 480){
			$('.box.box-link').removeClass("box-sm");
		}
		else{
			$('.box.box-link').addClass("box-sm");
		}
		
		if($(window).width() <= 767){
			var boxLgHeight = $(window).width();
			var boxSmHeight = $(window).width() / 2;
			$('.box.box-lg').css('height',boxLgHeight);
			$('.box.box-sm').css('height',boxSmHeight);
		}
		else{
			$('.box.box-lg,.box.box-sm,.box-5 ,.box-6,.box-7,.box-8,.box-11,.box-13').removeAttr("style");
		}
	}
	getHeight();
	$(window).resize(getHeight);

	$('.carousel').carousel();	
});