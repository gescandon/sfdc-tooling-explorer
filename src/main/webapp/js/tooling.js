var isMock = false;
/*
if (window.location.hostname.indexOf('localhost') > -1) {
  isMock = true;
}
*/

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
    $("#tooling").html("<pre>" + JSON.stringify($.parseJSON( response), null, "  ") + "</pre>" );
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
    var reqtype = $('#request-type').val();
    var reqvar =  encodeURIComponent($('#request-var').val());
    var queryString = 'type='+reqtype+'&var='+reqvar;
    console.log('*** tooling querystring: ' + queryString);
  $.get( '/tooling?' + queryString, function( response ) {
    if (isMock) {
         // replace response with mock data
          $("#mock-response").html("Mock response: " + response);
          response = mockTools;
          sendToIcicle($.parseJSON(response));
        }  
      $("#explore-out").html("<pre>" + JSON.stringify($.parseJSON(response), null, " ") + "</pre>");
    });
}

function sendToIcicle(jsonr) {
  var icicle = {
    name : jsonr.entityTypeName,
    id : 'node0',
    data : {
      size:jsonr.size}
    }
  
  var records = jsonr.records;
  map(function(x) {
      var newx = {
        id : x.Id,
        name : x.Name,
        data :{}
      };
      for (var key in x.attributes) {
        if (x.attributes.hasOwnProperty(key)) {
          newx.data[key] = x.attributes[key];
        }
      }
      return newx;
      }, records);
  icicle.children=records;    
  $("#explore-out").html("<PRE>" + JSON.stringify(icicle, null, "  ") + "</PRE>");

  var json = {  
        "id": "aUniqueIdentifier",  
        "name": "usually a nodes name",  
        "data": {  
          "some key": "some value",  
          "some other key": "some other value"  
         }, };
    icicleInit(icicle);
};
    

