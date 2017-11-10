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
//logo 男装、女装和美妆  注册旁的礼物盒  女装下面的飞机  登录下面的美女  页面上方定位导航  页面右边定位导航上边    中间     下面    二维码   小飞机
//rightp  免税广告   红色new（会动）  （评论赢积分、明星赞助、专题&活动、视频画报、代理政策）  左边导航   左导航下第一张图片  第二张图片  


