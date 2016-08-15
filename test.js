var fs = require("fs");

function myRead(path){

	fs.stat(path,function(err,stats){
		if (err) {
			return console.error(err);
		};
		if (stats.isFile()) {
			analyError(path);		
		}else if (stats.isDirectory()){
			//console.log('文件夹');
			fs.readdir(path,function(err,files){
				if (err) {
				    return console.error(err);
				}
				files.forEach(function(file){
					myRead(path + '/' + file);
				});
			});
		}
	});
}

function analyError(path){

	fs.readFile(path,function (err,data){
			if(err){
				return console.error(err);
			}

			var res = testCase(data);
			if (res) {
				console.log( "文件名: " + path  + "   √√√√");
			}else{
				console.log( "文件名: " + path  + "   XXXXX");
			}
	})
}

function testCase(data){

	var html_text = data.toString();
	var err_flag = false;

	// img标签 和 src没有空格
	
	var p1 = html_text.match(/<imgsrc/);
	if (p1) {
		console.log('img标签 和 src没有空格: ' + p1.length +'\n');
		err_flag = true;
	}else{
		//console.log(' 没有' + '\n');
	}

	// img src与其他属性空格
	var p2 = html_text.match(/<img(.*?)\"src=/);
	if (p2) {
		console.log('img src与其他属性空格: ' + p2.length +'\n');
		err_flag = true;
	}else{
		//console.log(' 没有' + '\n');
	}

	if (err_flag) {
		var p0 = html_text.match(/<img/g);

		if (p0) {
			console.log('img 个数: ' + p0.length +'\n');
		}else{
			console.log('img 个数: ' + '0');
		}
		console.log('\n');
		console.log('************************');
		return false;
	}else{
		return true;
	}

}

myRead("app/templates");
//myRead("tmp");
