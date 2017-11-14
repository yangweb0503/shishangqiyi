$(function() {
	console.log("a");
	function getid() {
		var reg = /\d*$/g;
		var str = location.search.match(reg)[0];
		
		if(str < 9) { //   正常子详情页
		$.getJSON("../json/list.json", function(data) {
				
				for(var i=0;i<data.length;i++){
					var num = data[i].id;
					if (num == str){
						var obj = data[i];

						$("title").text(obj.namec);
						console.log(obj.pic);
						$(".good_img img").attr({src:obj.pic});
						$(".good_title strong").text(obj.namee);
						$(".good_title h1").text(obj.namec);
						$(".good_title img").text(obj.type);
						$(".price_content strike").text(obj.zheqian);
						var str1 = obj.zhehou.slice(7);
						$(".price_content span").text(str1);
						for(var i=0;i<obj.color.length;i++){
							$(".good_color div select").append(`<option>${obj.color[i]}</option>`);
						}
						for(var i=0;i<obj.size.length;i++){
							$(".good_size div select").append(`<option>${obj.size[i]}</option>`);
						}
						$(".good_info").text(obj.introduce);

						for(var j=0;j<obj.img.length;j++){
							$(".good_imgs").append(`<img src="${obj.img[j]}">`);
						}

						return num;
					}
				}
			});
		
		
		
		
		} else if(str > 9 && str < 80) { //  GIF子页面
			$.getJSON("../json/bannerList.json", function(data) {
	console.log("b");
				
				for(var i=0;i<data.length;i++){
					var num = data[i].id;
					if (num == str){
						var obj = data[i];

						$("title").text(obj.namec);
						console.log(obj.pic);
						$(".good_img img").attr({src:obj.pic});
						$(".good_title strong").text(obj.namee);
						$(".good_title h1").text(obj.namec);
						$(".good_title img").text(obj.type);
						$(".price_content strike").text(obj.zheqian);
						var str1 = obj.zhehou.slice(7);
						$(".price_content span").text(str1);
						for(var i=0;i<obj.color.length;i++){
							$(".good_color div select").append(`<option>${obj.color[i]}</option>`);
						}
						for(var i=0;i<obj.size.length;i++){
							$(".good_size div select").append(`<option>${obj.size[i]}</option>`);
						}
						$(".good_info").text(obj.introduce);

						for(var j=0;j<obj.img.length;j++){
							$(".good_imgs").append(`<img src="${obj.img[j]}">`);
						}

						return num;
					}
				}
			});
			
		} else { //  列表页
			$.getJSON("../json/banner.json", function(data) {
				for(var i=0;i<data.length;i++){
					var num = data[i].img[0].id;
					if (num == str){
						console.log(data[i]);
						var obj = data[i];

						$("title").text(obj.img[3].title);
						
						$("#list_banner img").attr({src:obj.img[2].img1});
						return num;
					}
				}
			});

		}

	}


		
getid();

});