$(document).ready(function(){
	$('header#navbar .menu.nav-left').css("display","none");
	var video_width;
	var video_height;
	var back_height;

	function videoSize(){
		video_width = $('.video_container').width();
		video_height = video_width*9/16;
		$('.video_container').css('height',video_height);
	}

	function backgroundSize(){
		if($(window).width()>=480 && $(window).width()<768){
			back_height = $(window).width()*625/1200;
			$('.vice-background').css('height',back_height);
		}
		else if($(window).width()<480){
			back_height = $(window).width()*1000/900;
			$('.vice-background').css('height',back_height);
		}
		else{
			$('.vice-background').removeAttr("style");
		}
		
	}
	function getHeight(){
		if($(window).width() <= 480){
			$('.box.box-2').removeClass('box-lg');
			$('.box.box-2').removeClass('box-square');
			$('.box.box-2').css('height','auto');
		}
		else{
			$('.box.box-2').addClass('box-lg');
			$('.box.box-2').addClass('box-square');
		}
		if($(window).width() <= 767){
			var boxLgHeight = $(window).width();
			var boxSmHeight = $(window).width() / 2;
			$('.box.box-lg').css('height',boxLgHeight);
			$('.box.box-sm').css('height',boxSmHeight);
			$('.box.box-number').css('margin-top',boxSmHeight);
			$('.box.box-teacher').css('margin-top',-3*boxSmHeight);
		}
		else{
			$('.box.box-lg,.box.box-sm,box-number,.box-teacher').removeAttr("style");
		}
	}

	getHeight();
	videoSize();
	backgroundSize();

	$(window).resize(function(){
		backgroundSize();
		videoSize();
		getHeight();
	});	

});	