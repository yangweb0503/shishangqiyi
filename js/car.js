function totalNum() {
	var $onum = $(".car_num");
	var str = $.cookie("cart");
	var obj = str ? JSON.parse(str) : {}; //用来存商品ID（attr）和添加的数量（value）
	var sum = 0;
	for(var i in obj) {
		sum += obj[i];
	}
	$onum.text(sum);
}
totalNum();

function cookie(id, num, termal) {
	var $onum = $(".car_num");
	var str = $.cookie("cart");
	var obj = str ? JSON.parse(str) : {}; //用来存商品ID（attr）和添加的数量（value）

	var sum = 0;
	for(var i in obj) {
		sum += obj[i];
	}
	$onum.text(sum);

	obj[id] = obj[id] ? (termal ? num : obj[id] + num) : 1;
	console.log(obj);
	var objToStr = JSON.stringify(obj);
	$.cookie("cart", objToStr, {
		"path": "/",
		"expires": 7
	});
	sum += num;
	$onum.text(sum);
}

$(function() {
	if($.cookie("car")) {
//		console.log($.cookie("car"));
		$(".car_no").css({ "display": "none" });
		$("#car_warp").css({"padding":0});
		var obj = JSON.parse($.cookie("car"));
		for(var i in obj) {
			//			console.log(obj[i][1]);
			$(".car_body").append(`<li produceId="${i}" class="car_item clearfix">
				<div class="goods_detail">
					<input type="checkbox" checked>
					<a href="" class="cart_img">
						<img src="" alt="">
					</a>
					<div class="goods_title table_body">
						<p class="table_cell">
							<em></em><br />
							<span class="car_goodc">${obj[i][1]}</span>/
							<span class="car_goods">${obj[i][2]}</span><br />
							<a href="javascript:;" class="cart_edit"></a>
							<a href="javascript:;" class="cart_fav"></a>
							<a href="javascript:;" class="cart_del"></a>
						</p>
					</div>
				</div>	
					<div class="goods_price table_body">
						<p class="table_cell"></p>
					</div>
					<div class="goods_emoney table_body">0</div>
					<div class="goods_qty table_body">
						<p class="table_cell">
							<a href="javascript:;" class="reduce"></a>
							<input type="text" value="${obj[i][0]}">
							<a href="javascript:;" class="add"></a>
						</p>
					</div>
					<div class="goods_sum table_body">
						<p class="table_cell">
							<strong></strong>
						</p>
					</div>
				
			</li>`);

		}

		for(let i = 0; i < $(".car_body li").length; i++) {
			let proid = $(".car_body li").eq(i).attr("produceId");
			
			var ele = $(".car_body li").eq(i);
			
			if(proid > 9) {
				$.getJSON("../json/bannerList.json", function(data) {
					chanancan(data,i,proid);
				});

			} else {
				$.getJSON("../json/list.json", function(data) {
					chanancan(data,i,proid);
				});
			}
				
			
			
		}
		
	}
	
	//事件委托
	
	$("ul").delegate("li .reduce", "click", function(){
		var that = this;
		addreduce("reduce",that);

	});
	
	$("ul").delegate("li .add", "click", function(){
		var that = this;
		addreduce("add",that);
	});	
	
	$("ul").delegate("li .goods_qty input", "keyup", function(){

		if(isNaN($(this).val())) {
			alert("请输入正确数字！");
			$(this).val(99);
		}
		zongjia();
	});	
	
	$("ul").delegate("li .cart_del", "click", function(){
		console.log(this);
		var objcook = JSON.parse($.cookie("car"));
		var proid = $(this).parent().parent().parent().parent().attr("produceid");
		delete objcook[proid];
		console.log(objcook);
		$(this).parent().parent().parent().parent().remove();
		
		var snum = 0;
		for(var i in objcook){
			snum += objcook[i][0]
		}
		$(".car_num").text(snum);
		
		var strCoolkie = JSON.stringify(objcook);
		$.cookie("car",strCoolkie,30);
		zongjia();
	});	
		
	
	
	
	
	
	function addreduce(classname,that){
		var num = 0;
		if(classname == "add"){
			num = Number($(that).parent().find("input").val()) + 1;
			if(num > 99) {
				num = 99;
			}
		}else{
			num = Number($(that).parent().find("input").val()) - 1;
			if(num < 1) {
				num = 1;
			}
		}
		var uPrice = Number($(that).parent().parent().parent().find(".goods_price p").text().slice(1));
		var goodsSum = uPrice*num;
		$(that).parent().parent().parent().find(".goods_sum p strong").text("￥ " + goodsSum);
		$(that).parent().find("input").val(num);

		var proid = $(that).parent().parent().parent().attr("produceid");
		var setobjcookie = JSON.parse($.cookie("car"));

		setobjcookie[proid][0] = num;

		var snum = 0;
		for(var i in setobjcookie){
			snum += setobjcookie[i][0]
		}
		$(".car_num").text(snum);
		var setstrcookie = JSON.stringify(setobjcookie);
		$.cookie("car",setstrcookie,30);
		zongjia();
		
	}
	
	function chanancan(data,i,proid) {
		
		for(var j = 0; j < data.length; j++) {
			if(data[j].id == proid) {
				$(".car_body li").eq(i).find(".goods_title p em").text(data[j].namee);
				$(".car_body li").eq(i).find(".cart_img img").attr("src", data[j].pic);
				var str = data[j].zhehou.slice(7);
				$(".car_body li").eq(i).find(".goods_price p").text(str);
				var quantity = Number($(".car_body li").eq(i).find(".goods_qty input").val());
				var uPrice = Number(data[j].zhehou.slice(9));
				var goodsSum = uPrice * quantity;

				$(".car_body li").eq(i).find(".goods_sum strong").html("￥ " + goodsSum);
			}
		}

	}
	zongjia();
	function zongjia(){
		if($.cookie("car")){

			var obja = JSON.parse($.cookie("car"));

			var sumG = 0;
			for(let i in obja){

				sumG += obja[i][3]*obja[i][0];
			}

			$("#zongjia").text(sumG);
		}
		
//		
//		
	}

});