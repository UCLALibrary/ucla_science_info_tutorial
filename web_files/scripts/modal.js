$(document).ready(function() {
	$('#modal1').hide();
	$('#modal2').hide();
	$('#modal3').hide();
    $('#click1').click(function(){
		$("#modal1").dialog({
			modal: true,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	});
	$('#click2').click(function(){
		$("#modal2").dialog({
			modal: true,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	});
	$('#click3').click(function(){
		$("#modal3").dialog({
			modal: true,
			buttons: {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	});
});