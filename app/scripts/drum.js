$(document).ready(function(){
	$('header#navbar .menu.nav-left').css("display","none");
	function getHeight(){
		if($(window).width() <= 480){
			$('.box.box-2').removeClass('box-lg');
			$('.box.box-2').removeClass('box-square');
			$('.box.box-2').css('height','auto');
			$('.box.box-link,.box.box-3,.box.box-4,.box.box-5,.box.box-6').removeClass("box-sm");
			$('.box.box-link,.box.box-3,.box.box-4,.box.box-5,.box.box-6').css('height','auto');
		}
		else{
			$('.box.box-2').addClass('box-lg');
			$('.box.box-2').addClass('box-square');
			$('.box.box-link,.box.box-3,.box.box-4,.box.box-5,.box.box-6').addClass("box-sm");
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
	$('.carousel').carousel();
	
	if($(window).width()<768){
		$('.box-13').click(function(){
			$('.box').toggleClass('active');
		});
	}
	
	$(window).resize(getHeight);
	
});