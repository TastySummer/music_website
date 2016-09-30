$(document).ready(function(){
	function getHeight(){
		if($(window).width() <= 767){
			var boxLgHeight = $(window).width();
			var boxSmHeight = $(window).width() / 2;
			$('.box.box-lg').css('height',boxLgHeight);
			$('.box.box-sm').css('height',boxSmHeight);
			$('.box-5,.box-6').css('margin-top',boxSmHeight);
			$('.box-10').css('margin-top',-boxSmHeight);
			$('.box-7,.box-8').css('margin-top',-boxLgHeight);
			$('.box-14').css('margin-top',boxSmHeight);
			$('.box-11,.box-15,.box-16').css('margin-top',-3/2*boxLgHeight);
		}
		else{
			$('.box.box-lg,.box.box-sm,.box-7,.box-9,.box-10').removeAttr("style");
		}
	}

	getHeight();

	// if ($(window).width() < 480) {
	// 	setTimeout(function(){
	// 		$("#carousel2").carousel('pause');
	// 		$("#carousel2 .item:nth-child(1)").addClass("active");
	// 		$("#carousel2 .item:nth-child(1)").siblings(".item").removeClass("active");
	// 	},1000);
		
	// }
	// else{
	// 	$("#carousel2").carousel('cycle');

	// }

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
	$(window).resize(function(){
		getHeight();
		teacher_scroll();
		// if ($(window).width() < 480) {
		// 	setTimeout(function(){
		// 		$("#carousel2").carousel('pause');
		// 		$("#carousel2 .item:nth-child(1)").addClass("active");
		// 		$("#carousel2 .item:nth-child(1)").siblings(".item").removeClass("active");
		// 	},1000);
			
		// }
		// else{
		// 	$("#carousel2").carousel('cycle');

		// }
	});		
});