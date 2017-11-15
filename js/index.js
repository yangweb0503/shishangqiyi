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
	mians();
	$("#mianshui a").click(function(){
		if($("#mianshui input:checked")){
			var a = "down";
			$.cookie("mianshui",a,1);
		}
		$("#mianshui").css({"display":"none"});
	});
	function mians(){
		if($.cookie("mianshui")){
			$("#mianshui").css({"display":"none"});
		}else{
			$("#mianshui").css({"display":"block"});
		}
	}
	
	
	//  登录注册

	loginTab();
	function loginTab(){
		if($.cookie("username")){           //     [账号，密码 ]
			$("#login").html("我的账户");
			$(".login_tip").css({"display":"none"});
		}else{
			$("#loginB").css({"display":"block"});
		}
		
		$(".loginb").click(function(){
			$("#loginB").css({"display":"block"});
		})
		
		for(let i=0;i<$(".login_top li").length;i++){
			$(".login_top li").eq(i).click(function(){

				for(var j=0;j<$(".login_top li").length;j++){
					$(".login_top li").eq(j).removeClass("style_login");
				}
				$(this).addClass("style_login");
				
				for(var k=0;k<$(".pages form").length;k++){
					$(".pages form").eq(k).css({"display":"none"});
					$(".pages form").eq(i).css({"display":"block"});
				}
			});
		}
		
		$(".pop_login>a").click(function(){
			$("#loginB").css({"display":"none"});
		});
		
		var count1 = 0;
		$(".email_input").change(function(){
			var str1 = $(".email_input").val();
			if(!isEmail(str1)){
				alert("邮箱不正确！");
				count1 = 1;
			}else{
				count1 = 0;
			}
			$(".email_input").focus();
		});
		
		$("input[name='re_pass']").change(function(){
			if($("input[name='re_pass']").val() != $("input[name='pass']").val()){
				alert("两次密码不相同！");	
				count1 = 1;
			}else{
				count1 = 0;
			}
			$("input[name='re_pass']").focus();
		});
		
		$("input[name='username']").change(function(){
			var str1 = $("input[name='username']").val();
			if(!isUname(str1)){
				alert("用户名格式不正确！");
			}else{
				count1 = 1;
			}
			$("input[name='username']").focus();
		});
		
		$("input[name='cphone']").change(function(){
			var str1 = $("input[name='cphone']").val();
			if(!isPhoneNum(str1)){
				alert("手机号码不正确！");
				count1 = 1;
			}else{
				count1 = 0;
			}
			$("input[name='cphone']").focus();
		});
		
		$(".reg_item span").text(suiM());
		$(".reg_item span").click(function(){
			$(this).text(suiM());
		});
		
		$("input[name='code']").change(function(){
			
			if($("input[name='code']").val().toLowerCase() != $(".reg_item span").text().toLowerCase()){
				alert("验证码不正确！");
				count1 = 1;
			}else{
				count1 = 0;
			}
		});
		
		$(".reg_btn").click(function(){

			if(count1 != 0 || $("input[name='code']").val() =="" || $("input[name='cphone']").val() == "" || $("input[name='username']").val() == "" || $("input[name='pass']").val() == "" || $("input[name='email']").val() == ""){
				alert("请将信息填写完整！");
			}else{
//				console.log("成功");
				$("#loginB").css({ "display": "none" });
				var uname = $("input[name='username']").val();
				var pas = $("input[name='pass']").val();
				var objnameCookie = {uname:pas};
				var str = JSON.stringify(objnameCookie);
				$.cookie("username",str,7);
				console.log($.cookie("username"));
				$("#login").text("我的账户");
			}
		
		
		});
	}
	
	function suiM(){
		var arr = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var str = "";
		var num = arr.length;
		for(var i =0;i<4;i++){
			str += arr[Math.floor(Math.random()*num)];
		}
		return str;
	}
	
	    //  正则
    function isUname(str) {
	    var regUserName = /^([\w]|[\u2E80-\u9FFF]|[-_])+$/;
	    return regUserName.test(str);
    }
    function isPsw(str) {
        var regPsw = /^[\S]+$/;
        return regPsw.test(str);
     }
     function isEmail(str) {
         var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	     return regEmail.test(str);
     }
     function isPhoneNum(str) {
         var regPhoneNum = /^1[34578]\d{9}$/;
         return regPhoneNum.test(str);
     }

	// 购物车|| 登录
	
	carlogin();
	function carlogin(){
		if($.cookie("car")){
			var obj = JSON.parse($.cookie("car"));
			var nums = 0;
			for(var i in obj){
				nums += Number(obj[i][0]);
			}
			$(".car_num").text(nums);
		}
		

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