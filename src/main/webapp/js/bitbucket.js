Bitbucket = {
  usr:'gjescandon@gmail.com',
  pwd:'sandyPants',
  repo:'openjava1'
};

var bbServlet = "/bitbucket?url=" + Bitbucket.repo
$( document ).ready(function() {
	$.get( bbServlet, function( response ) {
	    $("#bitbucket").html( response ); // server response
	});
    console.log( "ready!" );
});
