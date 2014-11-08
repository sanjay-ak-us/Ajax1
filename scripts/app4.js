// JavaScript Document
var url = "http://echo.jsontest.com/hello/world";
var req;
function ajaxDemo(){
	
	if(window.XMLHttpRequest)
		req = new XMLHttpRequest();
	else
		req = new ActiveXObject("Microsoft.XMLHTTP");
	
	//$('.results').text(req.responseText);
	/*
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200)
		{
			readResponse(req);	
		}
	};*/
	req.onreadystatechange = readResponse;
	req.open("GET", url, true);
	req.send();
};

var readResponse = function(){
		if(req.readyState == 4 && req.status == 200)
		{
			var response = JSON.parse(req.responseText);
			alert(response.);
			$('.results').text(response.hello);	
		}
};

$(document).ready(function(e) {
	ajaxDemo();		
});