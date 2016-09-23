$(document).ready(function(){
	$('header#navbar .menu.nav-left').css("display","none");
	function getHeight(){
		if($(window).width() <= 480){
			$('.box').removeClass('box-lg');
			$('.box').removeClass('box-square');
			$('.box').css('height','auto');
		}
		else{
			$('.box').addClass('box-lg');
			$('.box').addClass('box-square');
		}
		if($(window).width() <= 767){
			var boxLgHeight = $(window).width();
			$('.box.box-lg').css('height',boxLgHeight);
		}
		else{
			$('.box.box-lg').removeAttr("style");
		}
	}
	getHeight();
	
	$(window).resize(getHeight);
	
});