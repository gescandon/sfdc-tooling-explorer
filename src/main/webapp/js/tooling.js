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
  if (isMock) {
    // replace response with mock data
	$("#mock-response").html("Mock response: " + response);
    response = mockTools;

    if (objectName == null) {
        response = toolingAll;    	
    }
  }	
  if ($("#tooling").length > 0) {
    $("#tooling").html( response );
  }

  $("#tooling-menu").html('');
  var result = 'No result';
  if (objectName == null) {
	  result = loadMenu(response);
  } else {
	  result = loadTools(response);
  }
  if ($("#tooling-menu").length > 0) {
	    $("#tooling-menu").html(result);
}	 
  
}

function loadMenu(response) {
	  var rObj = $.parseJSON(response);
	  var menu = rObj.sobjects;
	  
	  return reduce (function(s, x){
	    return s + "<li><div class=\"menu-link\" onclick=\"getTooling(\'" + x.name + "\')\">" + x.name  + "</div></li>";}, menu, "<ul>") + "</ul>";
	}

function loadTools(response, objectName) {
	  var rObj = $.parseJSON(response);
	  var records = rObj.records;
	  return reduce (function(s, x){
	    return s + "<li><div class=\"menu-link\" onclick=\"getTooling(\'" + x.attributes.type + "\',\'" + x.Name + "\')\">" + x.Name  + "</div></li>";}, records, "<ul>") + "</ul>";
	}

function getTooling(objectName,recordName) {
	
	var url = '/tooling?objectName=' + objectName;
	url += recordName == null ? '' : '&recordName=' + recordName
	$.get( url, function( response ) {
		if (isMock) {
		     // replace response with mock data
		      $("#mock-response").html("Mock response: " + response);
		      response = mockTools;
		    }	
			toolingResp(response, objectName);
		});
}

function explore() {
    var explorePath = $('#tool-path').val();
    
	$.get( '/tooling?explorePath=' + explorePath, function( response ) {
		if (isMock) {
		     // replace response with mock data
		      $("#mock-response").html("Mock response: " + response);
		      response = mockTools;
		    }	
			$("#explore-out").html(JSON.stringify($.parseJSON(response), null, " "));
		    icicleInit(response);
		});
}
