$(document).ready(function(){
	$(".go-up").hide();
	$(".button").click(function() {
		$(".go-up").show();
		$('body,html').animate({
			scrollTop: $(".container").offset().top},
			'slow');
	});

	$(".go-up").click(function() {
		$(".go-up").hide();
		$('html,body').animate({
			scrollTop: $(".content-top").offset().top},
			'slow');

	});
	$(window).scroll(function(){
		if($('body,html').scrollTop() === $(".content-top").offset().top){
			$(".go-up").hide();
		}else{
			$(".go-up").show();
		}
	});
});