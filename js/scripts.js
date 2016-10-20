$('#myCarousel').carousel({
  interval: false
});

$(".name").hover(function(){
	var jenna = '<img id="jenna" src="img/jenna2007.jpg" alt="jenna" />';
	$(this).prepend(jenna);
}, function(){
	$("#jenna").hide();
});

$(window).scroll(function(){
	$("header").css("borderBottom","2px solid #343e62");
});