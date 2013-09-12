function map(fn, a)
    {
        for (i = 0; i < a.length; i++)
        {
            a[i] = fn(a[i]);
        }
    }


function reduce(fn, a, init)
    {
        var s = init;
        for (i = 0; i < a.length; i++)
            s = fn( s, a[i] );
        return s;
    }

function toolingResp(response) {
  if ($("#tooling").length > 0) {
    $("#tooling").html( response );
  }
  if ($("#tooling-menu").length > 0) {
	    $("#tooling-menu").html(getMenu(response) );
	  }
}

function getMenu(response) {
  var rObj = $.parseJSON(response);
  var menu = rObj.sobjects;
  return reduce (function(x){
    return "<li>" + x.name  + "</li>";}, menu, "<ul>") + "</ul>";
}

$( document ).ready(function() {
	$.get( "/oauth", function( response ) {
	    console.log( response ); // server response
	});

	$.get( "/tooling", function( response ) {
	    toolingResp(response);
	});
});
