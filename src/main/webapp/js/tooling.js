


$( document ).ready(function() {
	$.get( "/oauth", function( response ) {
	    console.log( response ); // server response
	});

	$.get( "/tooling", function( response ) {
	    $("#tooling").html( response ); // server response
	});
});
