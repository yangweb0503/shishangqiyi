$(function() {
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
});