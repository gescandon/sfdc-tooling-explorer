var isMock = false;
if (window.location.hostname.indexOf('localhost') > -1) {
  isMock = true;
}

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
  if (isMock) {
    // replace response with mock data
	$("#mock-response").html("Mock response: " + response);
    response = toolingAll;
  }	
  if ($("#tooling").length > 0) {
    $("#tooling").html( response );
  }
  if ($("#tooling-menu").length > 0) {
	    $("#tooling-menu").html(getMenu(response));
	  }
}

function getMenu(response) {
  var rObj = $.parseJSON(response);
  var menu = rObj.sobjects;
  
  return reduce (function(s, x){
    return s + "<li><div class=\"menu-link\" onclick=\"getTooling(\'" + x.urls.sobject + "\')\">" + x.name  + "</div>: " + x.urls.sobject + "</li>";}, menu, "<ul>") + "</ul>";
}

function getTooling(url) {
	$.get( "/tooling?url=" + url, function( response ) {
		if (isMock) {
		     // replace response with mock data
		      $("#mock-response").html("Mock response: " + response);
		      response = mockTools;
		    }	
			toolingResp(response);
		});
}

$( document ).ready(function() {
	$.get( "/oauth", function( response ) {
	    console.log( response ); // server response
	});
    $.get( "/tooling", function( response ) {
      toolingResp(response);
	});	
});
