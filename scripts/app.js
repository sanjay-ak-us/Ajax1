// JavaScript Document
var url = "http://echo.jsontest.com/hello/world";

var getNow = function(){
	//var result = moment().format('YYYY-MM-DD | HH.MM.ss.SS');
	var result = new Date();
	var YYYY = result.getFullYear();
	var MM = result.getMonth();
	var DD = result.getDay();
	var HH = result.getHours();
	var MM = result.getMinutes();
	var ss = result.getSeconds();
	var SS = result.getMilliseconds(); 
	YYYY+'-'+MM+'-'+DD+' | '+HH+'.'+MM+'.'+ss+'.'+SS;
	return result.toLocaleString();
};

var localClock = function(){
	$('.local-time').text(getNow());
	setTimeout(function(){localClock();},500);
};

function asyncDemo(url){
	var demoRequest = $.ajax(ajaxSetting);
	demoRequest.done(demoCallback);
};

var ajaxSetting ={
	url:url,
	type:'Get',
	beforeSend:beforeSend
};

function beforeSend(){
	$('.results').append('<p>Request sent at: ' + getNow() + '</p>');
};

function demoCallback(data){
	$('.results').append('<p>Response at: ' + getNow() + '</p>');
    $('.results').append('<p>Response object <em>hello</em> is: <b>' + data.hello + '</b></p><hr>');
	setTimeout(function(){asyncDemo(url);}, 10000);
};

$(document).ready(function(){
		localClock();
		asyncDemo(url);
});

