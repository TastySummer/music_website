$(document).ready(function(){
	function getHeight(){
		if($(window).width() <= 767){
			var boxLgHeight = $(window).width();
			var boxSmHeight = $(window).width() / 2;
			$('.box.box-lg').css('height',boxLgHeight);
			$('.box.box-sm').css('height',boxSmHeight);
			$('.box-7').css('margin-top',boxSmHeight);
			$('.box-9').css('margin-top',-boxLgHeight);
		}
		else{
			$('.box.box-lg,.box.box-sm,.box-7,.box-9').removeAttr("style");
		}
	}
	getHeight();
	$(window).resize(getHeight);

	$('.carousel').carousel();	
});