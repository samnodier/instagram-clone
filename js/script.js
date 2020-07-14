// The JQuery for silidin through images

$(".images > img:gt(0)").hide();

setInterval(function() {
	$(".images > img:first")
		.fadeOut(3000)
		.next()
		.fadeIn(3000)
		.end()
		.appendTo('.images');
}, 5000);