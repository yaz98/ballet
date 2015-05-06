$(document).on("pagecreate","#fotos",function(){
	$("p").on("swipe",function(){
		$("span").text("swipe activado!");
	});
});