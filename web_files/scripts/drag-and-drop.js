$(document).ready(function(e) {
	$( "#draggable1" ).draggable({ revert: "invalid" });
		$( "#draggable2" ).draggable({ revert: "invalid" });
		$( "#draggable3" ).draggable({ revert: "invalid" });
		$( "#draggable4" ).draggable({ revert: "invalid" });
		$( "#droppable1" ).droppable({
			accept: '#draggable1',
			drop: function( event, ui ) {
				$( this ).addClass( "dropped-intext" );			
				$('#draggable1').css('visibility','hidden');
				$('#answer1').css('visibility','visible');
					
			}
		});
		$( "#droppable2" ).droppable({
			accept: '#draggable2',
			drop: function( event, ui ) {
				$( this ).addClass( "dropped-intext" );
				$('#draggable2').css('visibility','hidden');
				$('#answer2').css('visibility','visible');
			}
		});
		$( "#droppable3" ).droppable({
			accept: '#draggable3',
			drop: function( event, ui ) {
				$( this ).addClass( "dropped-intext" );
				$('#draggable3').css('visibility','hidden');
				$('#answer3').css('visibility','visible');
			}
		});
		$( "#droppable4" ).droppable({
			accept: '#draggable4',
			drop: function( event, ui ) {
				$( this ).addClass( "dropped-intext" );
				$('#draggable4').css('visibility','hidden');
				$('#answer4').css('visibility','visible');
			}
		});
});