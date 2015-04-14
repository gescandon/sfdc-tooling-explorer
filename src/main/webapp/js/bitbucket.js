Bitbucket = {
  repo:'openjava1'
};
function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
           x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
           y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
           x=x.replace(/^\s+|\s+$/g,"");
           console.log(x + ': ' + y);
      }
    return true;
    }

var bbServlet = "/bitbucket?url=" + Bitbucket.repo
$( document ).ready(function() {
	$.get( bbServlet, function( response ) {
	    $("#bitbucket").html( response ); // server response
	});
    getCookie('all');
});
