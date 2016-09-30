$(document).ready(function() {

  var global = {
    videoId: null,
    stateOfVideo: 1
  }

  var is_weixin = function(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
      return true;
    } else {
      return false;
    }
  }

  //视频关闭控制
  $('.modal.modal-video button.close').click(function() {
    var video = $(global.videoId);
    video[0].pause();
    video.closest('.modal-dialog').removeClass("active");
    setTimeout(function() {
      $('.modal-backdrop').trigger('click');
    }, 800);
  });

  $(document).delegate(".modal-backdrop", "click", function() {
    var video = $(global.videoId);
    video[0].pause();
    video.closest('.modal-dialog').removeClass("active");
	});

  //视频自动控制
  $('#video-btn').click(function() {
    var id = $(this).attr("data-source");
    global.videoId = id;
    var video = $(id);
    video[0].play();

    setTimeout(function() {
      video.closest('.modal-dialog').addClass("active");
    }, 100);
  })

  if (is_weixin()) {
    $('.btn.weixin').show().prev('.btn').hide();
  }

  

  //点击footer logo返回顶部
  $('#footer .logo').click(function() {
    $('body,html').animate({
        scrollTop: 0
      }, 600);
  });
});