

$(function(){

	
	$.ajax({
	type:"get",
	url:"../json/word.json",
	async:true,
	success:function(data){
		$("#cnt .word img").each(function(n){
			$(this).attr({src:data[n]});
			});
		}
	});	
	
	$.ajax({
		type:"get",
		url:"../json/banner.json",
		async:true,
		success:function(data){
			$("table img").each(function(n){
				var obj = data[n];
				var str = obj.img[1].src;
				$(this).attr({src:str});
			});
			$("table a").each(function(n){
				var num = data[n].img[0].id;
				var aurl = ""
				if(num>80){
					aurl = "list.html?id=" + num;
				}else{
					aurl = "produce.html?id=" + num;
				}
				$(this).attr({href:aurl});
			});
		}
	});
	

	$.ajax({
		type:"get",
		url:"../json/goods.json",
		async:true,
		success:function(data){
			
			$("table .tdhover .span1").each(function(n){
				$(this).text(data[n].img[2].introduce1)
			});
			$("table .tdhover .span2").each(function(i){
				$(this).text(data[i].img[3].introduce2)
			});
			$("table .tdhover .span3").each(function(j){
				$(this).text(data[j].img[5].zhehou)
			});
			$("table .tdhover .shange").each(function(k){
				$(this).text(data[k].img[4].zheqian)
			});
		}
	});


	$("table .tdhover").hover(function(){
		$(this).find("div").css({"display":"block"});
	},function(){
		$(this).find("div").css({"display":"none"});
	})
	

});
