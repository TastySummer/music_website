$(document).ready(function(){	
	//首屏向下滚动动效
	 var presection_height = $('.vice-background').height();
	 var boxes_height;
	 var offset_top;
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
	teacher_scroll();
	$(window).resize(teacher_scroll);	
});	