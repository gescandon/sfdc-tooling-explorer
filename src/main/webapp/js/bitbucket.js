Bitbucket = {
  usr:'gjescandon@gmail.com',
  pwd:'sandyPants',
  url:'https://bitbucket.org/api/1.0/repositories/gescandon/openjava1/'
};

$( document ).ready(function() {
	$.get( Bitbucket.url, function( response ) {
	    console.log( response ); // server response
	});
    console.log( "ready!" );
});
