$(document).ready(function() {
  var global = {
    videoId: null,
    stateOfVideo: 1
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
});