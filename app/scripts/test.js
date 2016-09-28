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

	if ($(window).width() < 480) {
		$("#carousel2").carousel('pause');
		$("#carousel2 .item:nth-child(1)").addClass("active");
		$("#carousel2 .item:nth-child(1)").siblings(".item").removeClass("active");
	}
	else{
		$("#carousel2").carousel('cycle');
	}

	$(window).resize(function(){
		getHeight();
		if ($(window).width() < 480) {
			$("#carousel2").carousel('pause');
			$("#carousel2 .item:nth-child(1)").addClass("active");
			$("#carousel2 .item:nth-child(1)").siblings(".item").removeClass("active");
		}
		else{
			$("#carousel2").carousel('cycle');
		}
	});

	// $('.carousel').carousel();

		
});