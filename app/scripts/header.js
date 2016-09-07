$(document).ready(function(){

	/* nav-mask 宽度*/
	var screenWidth = $(window).width();
	var pageWidth = $('.wrapper .carousel').width();
	$(".nav-mask").css("width", (screenWidth - pageWidth)/2);
	var maskWidth = (screenWidth - pageWidth)/2;

	var pathName = window.location.pathname;
	console.log(pathName);

	/* 滚动时左侧导航栏的出现和消失 */
	var beforescroll = 0;
	$(window).scroll(function(){		
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
					"left":120 + maskWidth + "px",
					"top" : "0px"
				}); 
				$('header#navbar .menu.nav-left').css("display","block");
				beforescroll = scrollTop;
		 	}	
		}
		if((480 < screenWidth) && (screenWidth<= 1024)){
			if(scrollTop > beforescroll){
		  		$('header#navbar .menu.nav-left').stop().animate({
					"left":120 + maskWidth + "px",
					"top" : "-300px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
				beforescroll = scrollTop;
		 	} 
		}
		// if(screenWidth <= 480){
		// 	if(scrollTop > beforescroll){
		//   		$('header#navbar .menu.nav-left').stop().animate({
		// 			"left":"0px",
		// 			"top" : "80px"
		// 		},1000,function(){
		// 			$('header#navbar .menu.nav-left').css("display","none");
		// 		});
		// 		beforescroll = scrollTop;
		//  	} 
		// }
		if(screenWidth <= 480){
	  		$('header#navbar .menu.nav-left').css({
				"left":"0px",
				"top" : "80px"
			});
			if(scrollTop > beforescroll){
				$('header#navbar .menu.nav-left').removeClass("open");
			}
		}
	});


	/* nav-left 位置*/
	if(screenWidth > 1024){
		$('header#navbar .menu.nav-left').css({"left":120 + maskWidth + "px","top":"0px","display":"block","height":"auto"});
	}
	if((480 < screenWidth) && (screenWidth <= 1024)){
		$('header#navbar .menu.nav-left').css({"left":120 + maskWidth + "px","top":"-300px","display":"none","height":"auto"});
	}
	if(screenWidth <= 480){
		$('header#navbar .menu.nav-left').css({"left":"0px","top":"80px","height":"0px"});
	}

	$("nav .wrapper").mouseover(function(){
		if(screenWidth > 1024){
			$('header#navbar .menu.nav-left').stop().animate({
				"left":120 + maskWidth + "px",
				"top" : "0px"
			});
			$('header#navbar .menu.nav-left').css("display","block");
		}
		if((480 < screenWidth) && (screenWidth <= 1024)){
		  	$('header#navbar .menu.nav-left').stop().animate({
				"left":120 + maskWidth + "px",
				"top" : "0px"
			});
			$('header#navbar .menu.nav-left').css("display","block");
		}
		// if(screenWidth <= 480){
		//   	$('header#navbar .menu.nav-left').stop().animate({
		// 		"left":"0px",
		// 		"top" : "80px"
		// 	});
		// 	$('header#navbar .menu.nav-left').css("display","block");
		// }
		if(screenWidth <= 480){
		  	$('header#navbar .menu.nav-left').css({
				"left":"0px",
				"top" : "80px"
			});
		}
	});
	$("nav .wrapper").mouseout(function(){
		var scrollTop = $(document).scrollTop();
		if(pathName == "/index.html" || pathName == "/"){
			if(screenWidth > 1024 && scrollTop == 0){
				$('header#navbar .menu.nav-left').stop().animate({
					"left":120 + maskWidth + "px",
					"top" : "0px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","block");
				});
			}
			if(screenWidth > 1024 && scrollTop > 0){
				$('header#navbar .menu.nav-left').stop().animate({
					"left":"-500px",
					"top" : "0px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
			}
		}
		if(pathName != "/index.html" && pathName != "/"){
			if(screenWidth > 1024){
				$('header#navbar .menu.nav-left').stop().animate({
					"left":"-500px",
					"top" : "0px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
			}
		}
		if((480 < screenWidth) && (screenWidth <= 1024)){
		  	$('header#navbar .menu.nav-left').stop().animate({
				"left":120 + maskWidth + "px",
				"top" : "-300px"
			},1000,function(){
				$('header#navbar .menu.nav-left').css("display","none");
			});
		}
		// if(screenWidth <= 480){
		//   	$('header#navbar .menu.nav-left').stop().animate({
		// 		"left":"0px",
		// 		"top" : "-300px"
		// 	});
		// 	$('header#navbar .menu.nav-left').css("display","none");
		// }
		if(screenWidth <= 480){
		  	$('header#navbar .menu.nav-left').css({
				"left":"0px",
				"top" : "80px"
			});
		}
	});
	$("header#navbar a.logo").click(function(){
		if(screenWidth <= 480){
			$('header#navbar .menu.nav-left').removeAttr("style");
		  	$('header#navbar .menu.nav-left').toggleClass("open");
		}
	});
	$(window).resize(function(){
		screenWidth = $(window).width();
		var pageWidth = $('.wrapper .carousel').width();
		$(".nav-mask").css("width", (screenWidth - pageWidth)/2);
		var maskWidth = (screenWidth - pageWidth)/2;
		if(screenWidth > 1024){
			$('header#navbar .menu.nav-left').css({"left":120 + maskWidth + "px","top":"0px","display":"block","height":"auto"});
		}
		if((480 < screenWidth) && (screenWidth <= 1024)){
			$('header#navbar .menu.nav-left').css({"left":120 + maskWidth + "px","top":"-300px","display":"none","height":"auto"});
		}
		if(screenWidth <= 480){
			$('header#navbar .menu.nav-left').css({"left":"0px","top":"80px","height":"0px"});
		}

		$(".wrapper").mouseover(function(){
			if(screenWidth > 1024){
				$('header#navbar .menu.nav-left').stop().animate({
					"left":120 + maskWidth + "px",
					"top" : "0px"
				});
				$('header#navbar .menu.nav-left').css("display","block");
			}
			if((480 < screenWidth) && (screenWidth <= 1024)){
			  	$('header#navbar .menu.nav-left').stop().animate({
					"left":120 + maskWidth + "px",
					"top" : "0px"
				});
				$('header#navbar .menu.nav-left').css("display","block");
			}
			if(screenWidth <= 480){
			  	$('header#navbar .menu.nav-left').css({
					"left":"0px",
					"top" : "80px"
				});
			}
		});
		$("nav .wrapper").mouseout(function(){
			if(pathName == "/index.html" || pathName == "/"){
				if(screenWidth > 1024 && scrollTop == 0){
					$('header#navbar .menu.nav-left').stop().animate({
						"left":120 + maskWidth + "px",
						"top" : "0px"
					},1000,function(){
						$('header#navbar .menu.nav-left').css("display","block");
					});
				}
				if(screenWidth > 1024 && scrollTop > 0){
					$('header#navbar .menu.nav-left').stop().animate({
						"left":"-500px",
						"top" : "0px"
					},1000,function(){
						$('header#navbar .menu.nav-left').css("display","none");
					});
				}
			}
			if(pathName != "/index.html" && pathName != "/"){
				if(screenWidth > 1024){
					$('header#navbar .menu.nav-left').stop().animate({
						"left":"-500px",
						"top" : "0px"
					},1000,function(){
						$('header#navbar .menu.nav-left').css("display","none");
					});
				}
			}
			if((480 < screenWidth) && (screenWidth <= 1024)){
			  	$('header#navbar .menu.nav-left').stop().animate({
					"left":120 + maskWidth + "px",
					"top" : "-300px"
				},1000,function(){
					$('header#navbar .menu.nav-left').css("display","none");
				});
			}
			// if(screenWidth <= 480){
			//   	$('header#navbar .menu.nav-left').stop().animate({
			// 		"left":"0px",
			// 		"top" : "-300px"
			// 	});
			// 	$('header#navbar .menu.nav-left').css("display","none");
			// }
			if(screenWidth <= 480){
			  	$('header#navbar .menu.nav-left').css({
					"left":"0px",
					"top" : "80px"
				});
			}
		});
		$("header#navbar a.logo").click(function(){
			if(screenWidth <= 480){
				$('header#navbar .menu.nav-left').removeAttr("style");
			  	$('header#navbar .menu.nav-left').toggleClass("open");
			}
		});

		var beforescroll = 0;
		$(window).scroll(function(){		
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
						"left":120 + maskWidth + "px",
						"top" : "0px"
					}); 
					$('header#navbar .menu.nav-left').css("display","block");
					beforescroll = scrollTop;
			 	}	
			}
			if((480 < screenWidth) && (screenWidth<= 1024)){
				if(scrollTop > beforescroll){
			  		$('header#navbar .menu.nav-left').stop().animate({
						"left":120 + maskWidth + "px",
						"top" : "-300px"
					},1000,function(){
						$('header#navbar .menu.nav-left').css("display","none");
					});
					beforescroll = scrollTop;
			 	} 
			}
			// if(screenWidth <= 480){
			// 	if(scrollTop > beforescroll){
			//   		$('header#navbar .menu.nav-left').stop().animate({
			// 			"left":"0px",
			// 			"top" : "80px"
			// 		},1000,function(){
			// 			$('header#navbar .menu.nav-left').css("display","none");
			// 		});
			// 		beforescroll = scrollTop;
			//  	} 
			// }
			if(screenWidth <= 480){
		  		$('header#navbar .menu.nav-left').css({
					"left":"0px",
					"top" : "80px"
				});
				if(scrollTop > beforescroll){
					$('header#navbar .menu.nav-left').removeClass("open");
				}
			}
		});
	});
});