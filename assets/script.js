$(document).ready(function(){

	$('.sidebar > ul > li > ul').hide();

	$('.with-sub').on('click', function(){
		
		$(this).parent().find('ul').slideToggle();
	});
});