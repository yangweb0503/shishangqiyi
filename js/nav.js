$(function(){
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
});