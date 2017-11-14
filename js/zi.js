$(function() {

	function getid() {
		var reg = /\d*$/g;
		var str = location.search.match(reg)[0];

		if(str < 9) { //   正常子详情页
			$.getJSON("../json/list.json", function(data) {

				for(var i = 0; i < data.length; i++) {
					var num = data[i].id;
					if(num == str) {
						var obj = data[i];

						$("title").text(obj.namec);

						$(".good_img img").attr({ src: obj.pic });
						$(".good_title strong").text(obj.namee);
						$(".good_title h1").text(obj.namec);
						$(".good_title img").text(obj.type);
						$(".price_content strike").text(obj.zheqian);
						var str1 = obj.zhehou.slice(7);
						$(".price_content span").text(str1);
						for(var i = 0; i < obj.color.length; i++) {
							$(".good_color div select").append(`<option>${obj.color[i]}</option>`);
						}
						for(var i = 0; i < obj.size.length; i++) {
							$(".good_size div select").append(`<option>${obj.size[i]}</option>`);
						}
						$(".good_info").text(obj.introduce);

						for(var j = 0; j < obj.img.length; j++) {
							$(".good_imgs").append(`<img src="${obj.img[j]}">`);
						}

						return num;
					}
				}
			});

		} else if(str > 9 && str < 80) { //  GIF子页面
			$.getJSON("../json/bannerList.json", function(data) {
				console.log("b");

				for(var i = 0; i < data.length; i++) {
					var num = data[i].id;
					if(num == str) {
						var obj = data[i];

						$("title").text(obj.namec);
						console.log(obj.pic);
						$(".good_img img").attr({ src: obj.pic });
						$(".good_title strong").text(obj.namee);
						$(".good_title h1").text(obj.namec);
						$(".good_title img").text(obj.type);
						$(".price_content strike").text(obj.zheqian);
						var str1 = obj.zhehou.slice(7);
						$(".price_content span").text(str1);
						for(var i = 0; i < obj.color.length; i++) {
							$(".good_color div select").append(`<option>${obj.color[i]}</option>`);
						}
						for(var i = 0; i < obj.size.length; i++) {
							$(".good_size div select").append(`<option>${obj.size[i]}</option>`);
						}
						$(".good_info").text(obj.introduce);

						for(var j = 0; j < obj.img.length; j++) {
							$(".good_imgs").append(`<img src="${obj.img[j]}">`);
						}

						return num;
					}
				}
			});

		} else { //  列表页
			$.getJSON("../json/banner.json", function(data) {
				for(var i = 0; i < data.length; i++) {
					var num = data[i].img[0].id;
					if(num == str) {
						console.log(data[i]);
						var obj = data[i];

						$("title").text(obj.img[3].title);

						$("#list_banner img").attr({ src: obj.img[2].img1 });
						return num;
					}
				}
			});

		}

	}

	getid();
	console.log("a");
	$(".reduce").click(function() {
		var num = $(".sell_content input").val() - 1;
		if(num < 1) {
			num = 1;
		}
		$(".sell_content input").val(num);
	});
	$(".add").click(function() {
		var num = Number($(".sell_content input").val()) + 1;
		if(num > 99) {
			num = 99;
		}
		$(".sell_content input").val(num);
	});
	$(".sell_content input").keyup(function() {
		if(isNaN($(".sell_content input").val())) {
			alert("请输入正确数字！");
			$(".sell_content input").val(99);
		}
	});










	if($.cookie("car")) {

		var objCookie = JSON.parse($.cookie("car"));

	} else {
		var objCookie = {};
	}

	$(".car_btn").click(function() {
		//	console.log($("#gcolor").val());
		var gflag = true;
		if($("#gcolor").val() == "") {
			alert("请选择颜色!");
			gflag = false;
		} else {
			if($("#gsize").val() == "") {
				alert("请选择尺寸！");
				gflag = false;
			}
		}
		var gcolor = $("#gcolor").val(),gsize = $("#gsize").val(),gnum = $(".good_qtt input").val();
//		console.log(gcolor,gsize,gnum);

		if(gflag) {
			var reg = /\d*$/g;
			var proId = location.search.match(reg)[0];
			if(!objCookie[proId]){
				objCookie[proId] = [];
				objCookie[proId].push(gnum);
				objCookie[proId].push(gcolor);
				objCookie[proId].push(gsize);
			}else{
				objCookie[proId][0] = gnum;
				objCookie[proId][1] = gcolor;
				objCookie[proId][2] = gsize;
			}
			console.log(objCookie);
			var strCoolkie = JSON.stringify(objCookie);
			
			$.cookie("car",strCoolkie,30);
			
			console.log($.cookie("car"));
			var objnum = JSON.parse($.cookie("car"));
			
			var goodsNum = 0;
			for(var n in objnum){
				console.log(objnum[n]);
				goodsNum += Number(objnum[n][0]); 
			}
			$(".car_num").text(goodsNum);
		}
	});

});