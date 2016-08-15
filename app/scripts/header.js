$(document).ready(function(){
	$('.nav-left li').click(function(){
		$(this).addClass("active");
	});
	/* 滚动时左侧导航栏的出现和消失 */
	var beforescroll = 0;
	$(window).scroll(function(){	
		var screenWidth = $(window).width();	
		var scrollTop = $(document).scrollTop();
		if (screenWidth > 1024) {
		 	if(scrollTop > beforescroll){
		  		$('header#navbar .menu.nav-left').stop().animate({
					"left":"-500px",
					"top" : "0px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
				beforescroll = scrollTop;
		 	} 
		 	else if(scrollTop == 0){
		  		$('header#navbar .menu.nav-left').stop().animate({
					"left":"160px",
					"top" : "0px"
				}); 
				$('header#navbar .menu.nav-left').css("display","block");
				beforescroll = scrollTop;
		 	}
		 	
		}
		if((480 < screenWidth) && (screenWidth<= 1024)){
			if(scrollTop > beforescroll){
		  		$('header#navbar .menu.nav-left').stop().animate({
					"left":"120px",
					"top" : "-300px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
				beforescroll = scrollTop;
		 	} 
		 	
			// $("header#navbar .menu.nav-left").mouseout(function(){
			//   	$('header#navbar .menu.nav-left').stop().animate({
			// 		"left":"120px",
			// 		"top" : "-300px",
			// 		"display":"none"
			// 	});
			// });
		}
		if(screenWidth <= 480){
			if(scrollTop > beforescroll){
		  		$('header#navbar .menu.nav-left').stop().animate({
					"left":"0px",
					"top" : "120px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
				beforescroll = scrollTop;
		 	} 
		}
	});

	/* nav-mask 宽度*/
	var screenWidth = $(window).width();
	var pageWidth = $('.wrapper .carousel').width();
	$(".nav-mask").css("width", (screenWidth - pageWidth)/2);
	/* nav-left 位置*/
	if(screenWidth > 1024){
		$('header#navbar .menu.nav-left').css({"left":"160px","top":"0px","display":"block"});
	}
	if((480 < screenWidth) && (screenWidth <= 1024)){
		$('header#navbar .menu.nav-left').css({"left":"120px","top":"-300px","display":"none"});
	}
	if(screenWidth <= 480){
		$('header#navbar .menu.nav-left').css({"left":"0px","top":"120px","display":"none"});
	}

	$("header#navbar a.logo").mouseover(function(){
		if(screenWidth > 1024){
			$('header#navbar .menu.nav-left').stop().animate({
				"left":"160px",
				"top" : "0px"
			});
			$('header#navbar .menu.nav-left').css("display","block");
		}
		if((480 < screenWidth) && (screenWidth <= 1024)){
		  	$('header#navbar .menu.nav-left').stop().animate({
				"left":"120px",
				"top" : "0px"
			});
			$('header#navbar .menu.nav-left').css("display","block");
		}
		if(screenWidth <= 480){
		  	$('header#navbar .menu.nav-left').stop().animate({
				"left":"0px",
				"top" : "120px"
			});
			$('header#navbar .menu.nav-left').css("display","block");
		}
	});

	$(window).resize(function(){
		var screenWidth = $(window).width();
		var pageWidth = $('.wrapper .carousel').width();
		$(".nav-mask").css("width", (screenWidth - pageWidth)/2);
		if(screenWidth > 1024){
			$('header#navbar .menu.nav-left').css({"left":"160px","top":"0px","display":"block"});
		}
		if((480 < screenWidth) && (screenWidth <= 1024)){
			$('header#navbar .menu.nav-left').css({"left":"120px","top":"0px","display":"none"});
		}

		if(screenWidth <= 480){
			$('header#navbar .menu.nav-left').css({"left":"0px","top":"120px","display":"none"});
		}

		$("header#navbar a.logo").mouseover(function(){
			if(screenWidth > 1024){
				$('header#navbar .menu.nav-left').stop().animate({
					"left":"160px",
					"top" : "0px"
				});
				$('header#navbar .menu.nav-left').css("display","block");
			}
			if((480 < screenWidth) && (screenWidth<= 1024)){
			  	$('header#navbar .menu.nav-left').stop().animate({
					"left":"120px",
					"top" : "0px"
				});
				$('header#navbar .menu.nav-left').css("display","block");
			}
			if(screenWidth <= 480){
			  	$('header#navbar .menu.nav-left').stop().animate({
					"left":"0px",
					"top" : "120px"
				});
				$('header#navbar .menu.nav-left').css("display","block");
			}
		});

	});
});