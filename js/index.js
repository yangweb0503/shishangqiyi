$(function() {
	$(function(){
	$.ajax({
		type:"get",
		url:"../json/data1.json",
		async:true,
		success:function(data){
$("#logo a").css({"backgroundImage":"url("+data[0].logo+")"});
$("#top_nav").css({"backgroundImage":"url("+data[1].plane+")"});
$("#login .reg").css({"backgroundImage":"url("+data[2].regicon+")"});
$("#top_nav li a").css({"backgroundImage":"url("+data[3].nav+")"});
$("#mello").css({"backgroundImage":"url("+data[4].header_bottom+")"});
$("#rightAside_c .rightA-1 div").css({"backgroundImage":"url("+data[5].fixed_rightt+")"});
$("#rightAside_c .rightLogin ul li").css({"backgroundImage":"url("+data[6].fixed_rightc+")"});
$("#rightAside_c .saoma a").css({"backgroundImage":"url("+data[7].fixed_rightb+")"});
$("#rightAside_c .erweima img").attr({src:data[8].erweima,alt:"二维码"});
$(".leftMenu ul li a").css({"backgroundImage":"url("+data[7].fixed_rightb+")"});
$("#rightAside_c .rightA-font").css({"backgroundImage":"url("+data[9].smallplane+")"});
$("#mianshui img").attr({src:data[10].rightp,alt:"二维码"});
$("#fixedTop .new").css({"backgroundImage":"url("+data[11].topnew+")"});
$("#leftAside .new").css({"backgroundImage":"url("+data[12].newr+")"});
$("#leftAside .h37").css({"backgroundImage":"url("+data[13].even+")"});
$("#leftAside .leftmei img").attr({src:data[14].leftb1});
$("#leftAside .left7zhe img").attr({src:data[15].leftb2});
$("#fixedTop .logo").css({"backgroundImage":"url("+data[16].toplogo+")"});
$("#contect_bar .tuijian").css({"backgroundImage":"url("+data[17].tuijian+")"});
$("#rightAside_c .tuijian").css({"backgroundImage":"url("+data[17].tuijian+")"});
$("#contect_bar .keyu").css({"backgroundImage":"url("+data[18].mang+")"});
$(".bottomImg").attr({src:data[19].bottomImg});
		},
		error:function(data){
			console.log("获取失败");
		}
	});
});	

	
	$.ajax({
		type:"get",
		url:"../json/nav2.json",
		async:true,
		success:function(data){
			var eArr = $("#fixedTop ul li a");
			eArr.each(function(i){
				$(eArr[i]).text(data[i]);
			});
		}
	});
	
	$.ajax({
		type:"get",
		url:"../json/nav1.json",
		async:true,
		success:function(data){
			var eArr = $("#leftNav li a");
			eArr.each(function(i){
				$(eArr[i]).text(data[i]);
			});
		}
	});
	
	if($.cookie("car")){
		var obj = JSON.parse($.cookie("car"));
		var nums = 0;
		for(var i in obj){

			nums += Number(obj[i][0]);
		}
		$(".car_num").text(nums);
	}
	

	$("#rightAside_c .saoma a").hover(function() {
		$("#rightAside_c .erweima").css({ "display": "block" });
	}, function() {
		$("#rightAside_c .erweima").css({ "display": "none" });
	});

	$(window).scroll(function() {

		if($(document).scrollTop() >= 150) {
			$("#fixedTop").css({ "display": "block" });
			$("#rightAside").css({ "position": "fixed", "top": "40px" });
		} else {
			$("#fixedTop").css({ "display": "none" });
			$("#rightAside").css({ "position": "absolute", "top": "126px" });
		}
	});

	$("#mianshui a").click(function() {
		$("#mianshui").css({ "display": "none" });
	});

	var contentHeight = $("#content").css("height");
	$("#leftAside").css({ "height": contentHeight });

	$("#rightAside .right_btn").click(function() {
		if($("#rightAside_c").css("left") == "0px") {
			$("#rightAside_c").animate({ left: "+100px" },300);
			$("#rightAside .right_btn").animate({ left: "+80px" },300,function(){
				$("#rightAside .right_btn").text("<");
				$("#contect_bar").css({"display":"block"});
			});
		} else {
			$("#rightAside .right_btn").animate({ left: "-20px" },300);
			$("#rightAside_c").animate({ left: "-0px" },300,function(){
				$("#rightAside .right_btn").text(">");
				$("#contect_bar").css({"display":"none"});
			});
			console.log("a");
		}
	});
	
	$("#rightAside .bottom_btn").click(function(){
		console.log('a');
		console.log($(document).scrollTop());
		$('html,body').animate({scrollTop:"0px"},300);
	});
	
	
	
	setTimeout(function(){
		var str = $("#content").css("height");
		$("#leftAside").css({"height":str});
	},(2000))
});