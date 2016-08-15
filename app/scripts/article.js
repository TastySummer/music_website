$(document).ready(function(){
    $("#article").click(function(){
        var htmlobj = $.ajax({
                url:"/article.html",
                async:false
            });
        $('#myModal').append(htmlobj.responseText);
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
		$('#myModal').empty();
	})   
});