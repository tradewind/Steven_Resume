$(document).ready(function(){
	$('.tabs li').click(function(){
		if ($(this).hasClass('selected')) {
			return;
		}
		else {
			$('.tabs li').removeClass('selected');
			var selection = '.page.'+$(this).attr('class');
			$(this).addClass('selected');
		}
		$('.content').fadeOut('slow', function(){		
			$('.page').hide();
			$(selection).show();
			
		}).fadeIn('slow');
		

	});
		

});