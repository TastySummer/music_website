$(document).ready(function(){function a(){d=$(".video_container").width(),e=9*d/16,$(".video_container").css("height",e)}function b(){$(window).width()>=480&&$(window).width()<768?(f=625*$(window).width()/1200,$(".vice-background").css("height",f)):$(window).width()<480?(f=1e3*$(window).width()/900,$(".vice-background").css("height",f)):$(".vice-background").removeAttr("style")}function c(){if($(window).width()<=480?($(".box.box-2").removeClass("box-lg"),$(".box.box-2").removeClass("box-square"),$(".box.box-2").css("height","auto")):($(".box.box-2").addClass("box-lg"),$(".box.box-2").addClass("box-square")),$(window).width()<=767){var a=$(window).width(),b=$(window).width()/2;$(".box.box-lg").css("height",a),$(".box.box-sm").css("height",b),$(".box.box-number").css("margin-top",b),$(".box.box-teacher").css("margin-top",-3*b)}else $(".box.box-lg,.box.box-sm,box-number,.box-teacher").removeAttr("style")}$("header#navbar .menu.nav-left").css("display","none");var d,e,f;c(),a(),b(),$(window).resize(function(){b(),a(),c()})});