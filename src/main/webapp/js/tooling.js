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

  $("#tooling-menu").html('');
	  if ($("#tooling-menu").length > 0) {
	    $("#tooling-menu").html(getMenu(response));
	  }	  
  } else {
	  if ($("#tooling-menu").length > 0) {
		    $("#tooling-menu").html(getTools(response));
	  }	 
  }
}

function getMenu(response) {
	  var rObj = $.parseJSON(response);
	  var menu = rObj.sobjects;
	  
	  return reduce (function(s, x){
	    return s + "<li><div class=\"menu-link\" onclick=\"getTooling(\'" + x.name + "\')\">" + x.name  + "</div></li>";}, menu, "<ul>") + "</ul>";
	}

function getTools(response, objectName) {
	  var rObj = $.parseJSON(response);
	  var records = rObj.records;
	  
	  return reduce (function(s, x){
	    return s + "<li><div class=\"menu-link\" onclick=\"getTooling(\'" + x.Name + "\')\">" + x.Name  + "</div></li>";}, records, "<ul>") + "</ul>";
	}

function getTooling(objectName) {
	
	var url = '/tooling?objectName =' + objectName;
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
