$(document).ready(function(){	
	//首屏向下滚动动效
	 var presection_height = $('.vice-background').height();
	 var boxes_height;
	 var offset_top;
	 var video_width;
	 var video_height;
	 var back_height;

	 function teacher_scroll(){
	    $('.scroll-down').click(function() {
	      	if($(window).width() >= 992){
	        	boxes_height = $('.box-lg').height() + $('.box-sm').height();

	      	}
	      	else if(($(window).width() < 992) && ($(window).width() >= 480)){
	        	boxes_height = 2*($('.box-lg').height() + $('.box-sm').height());
	      	}
	      	else if($(window).width() < 480){
	        	boxes_height = $('.box-lg').height() + $('.box-2').height() + $('.box-3').height() + $('.box-4').height() + $('.box-4').height() + $('.box-6').height();
	      	}
	      	offset_top = presection_height + boxes_height;
	      	$('body,html').animate({
	        	scrollTop: offset_top
	      	}, 600);
	    });
	}
	
	

	
	
	function videoSize(){
		video_width = $('embed').width();
		video_height = video_width*9/16;
		$('embed').css('height',video_height);
	}

	function backgroundSize(){
		back_height = $(window).width()*625/1200;
		$('.vice-background').css('height',back_height);
	}

	teacher_scroll();
	videoSize();
	

	if($(window).width()<768){
		backgroundSize();
	}
	else{
		$('.vice-background').removeAttr("style");
	}

	$(window).resize(function(){
		if($(window).width()<768){
			backgroundSize();
		}
		else{
			$('.vice-background').removeAttr("style");
		}
		teacher_scroll();
		videoSize();
	});	
});	