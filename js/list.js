$(function() {
	$.getJSON("../json/list.json", function(data) {
		var html = '';
		for(var i = 0; i < data.length; i++) {
			var aurl = 'produce.html?id=' + data[i].id;

			html += `<li><a href="${aurl}"><img src="${data[i].pic}"></a><a href="${aurl}" class="namec">${data[i].namec}</a><a href="${aurl}" class="namee">${data[i].namee}</a><strike>${data[i].zheqian}</strike><span>${data[i].zhehou}</span></li>`;
		}
		$(".saleList").html(html);
	})
});