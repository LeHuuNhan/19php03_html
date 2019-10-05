
$('#no').mouseover(function () {
	$(this).html('Yes');
});
$('#no').mouseleave(function () {
	$(this).html('No');
});

$('.hide').click(function () {
	$('.label').hide();
});

$('.show').click(function () {
	$('.label').show();
});

$('.animation-left').click(function () {
	$('.animation').animate({'left':'100%'}, 3000);
	$('.animation2').animate({'left':'100%'}, 2000);
});

$('.animation-right').click(function () {
	$('.animation').animate({'left':'0px'});
	$('.animation2').animate({'left':'0px'});
});