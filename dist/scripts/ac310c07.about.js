$(document).ready(function(){function a(){if($(window).width()<=480?($(".box").removeClass("box-lg"),$(".box").removeClass("box-square"),$(".box").css("height","auto")):($(".box").addClass("box-lg"),$(".box").addClass("box-square")),$(window).width()<=767){var a=$(window).width();$(".box.box-lg").css("height",a)}else $(".box.box-lg").removeAttr("style")}$("header#navbar .menu.nav-left").css("display","none"),a(),$(window).resize(a)});