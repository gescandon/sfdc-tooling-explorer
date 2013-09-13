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

function toolingResp(response, objectName) {
	alert(objectName);
  if (isMock) {
    // replace response with mock data
	$("#mock-response").html("Mock response: " + response);
    response = toolingAll;
  }	
  if ($("#tooling").length > 0) {
    $("#tooling").html( response );
  }

  if (objectName == null) {
	  if ($("#tooling-menu").length > 0) {
	    $("#tooling-menu").html(getMenu(response));
	  }
  } else {
	  $("#tooling-menu").html('');
  }
}

function getMenu(response) {
  var rObj = $.parseJSON(response);
  var menu = rObj.sobjects;
  
  return reduce (function(s, x){
    return s + "<li><div class=\"menu-link\" onclick=\"getTooling(\'" + x.name + "\')\">" + x.name  + "</div></li>";}, menu, "<ul>") + "</ul>";
}

function getTooling(objectName) {
	
	var url = '/tooling?query=Select+id,Name+from+' + objectName;
	alert('tooling url: ' + url);
	$.get( url, function( response ) {
		if (isMock) {
		     // replace response with mock data
		      $("#mock-response").html("Mock response: " + response);
		      response = mockTools;
		    }	
			toolingResp(response, objectName);
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
