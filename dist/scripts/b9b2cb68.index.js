$(document).ready(function(){function a(){if($(window).width()<=767){var a=$(window).width(),b=$(window).width()/2;$(".box.box-lg").css("height",a),$(".box.box-sm").css("height",b),$(".box-5,.box-6").css("margin-top",b),$(".box-10").css("margin-top",-b),$(".box-7,.box-8").css("margin-top",-a),$(".box-14").css("margin-top",b),$(".box-11,.box-15,.box-16").css("margin-top",-1.5*a)}else $(".box.box-lg,.box.box-sm,.box-7,.box-9,.box-10").removeAttr("style")}a(),$(window).resize(function(){a()})});