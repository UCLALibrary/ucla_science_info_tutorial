$('head').append('<style type="text/css">#homeText p.homeList { display: none;}</style>');
$(document).ready(function() {
	$('#module01').attr('href','science_mod01pg01.html');
	$('#module02').attr('href','science_mod02pg01.html');
	$('#module03').attr('href','science_mod03pg01.html');
	$('#module04').attr('href','science_mod04pg01.html');
	$('#module05').attr('href','science_mod05pg01.html');
	var delayTime = 300;
	var fadeTime = 500;
	$('.homeList:eq(0)').delay(delayTime).fadeIn(fadeTime, function(){
		$('.homeList:eq(1)').delay(delayTime).fadeIn(fadeTime, function(){
			$('.homeList:eq(2)').delay(delayTime).fadeIn(fadeTime, function(){
				$('.homeList:eq(3)').delay(delayTime).fadeIn(fadeTime, function(){
					$('.homeList:eq(4)').delay(delayTime).fadeIn(fadeTime, function(){
						$('.homeList:eq(5)').delay(delayTime).fadeIn(fadeTime);
					});
				});
			});
		});
	});
	$('.homeImage:eq(0)').delay(delayTime).fadeOut(fadeTime, function(){
		$('.homeImage:eq(1)').delay(delayTime).fadeOut(fadeTime, function(){
			$('.homeImage:eq(2)').delay(delayTime).fadeOut(fadeTime, function(){
				$('.homeImage:eq(3)').delay(delayTime).fadeOut(fadeTime, function(){
					$('.homeImage:eq(4)').delay(delayTime).fadeOut(fadeTime, function(){
						$('.homeImage:eq(5)').delay(delayTime).fadeOut(fadeTime)
					});
				});
			});
		});
	});	
	$('#module01_inline').attr('href','science_mod01pg01.html');
});