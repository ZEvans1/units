// Back-end logic:

var lbkg = function(lbnumber) {
	return lbnumber / 2.2;
};

var lgal = function(lnumber) {
  return lnumber / 3.8;
};

var cupsl = function(cupsnumber) {
  return cupsnumber * 0.236;
};

//Below this line is front-end logic:

$(document).ready(function() {
	$("form#lb").submit(function(event) {
  event.preventDefault();
	var lbnumber = parseInt($("#lb1").val());
	var lbresult = lbkg(lbnumber);
	$("#lboutput").text(lbresult);
 	});
  $("form#liter").submit(function(event) {
  event.preventDefault();
	var lnumber = parseInt($("#liter1").val());
	var lresult = lgal(lnumber);
	$("#literoutput").text(lresult);
 	});
  $("form#cups").submit(function(event) {
  event.preventDefault();
	var cupsnumber = parseInt($("#cups1").val());
	var cupsresult = cupsl(cupsnumber);
	$("#cupsoutput").text(cupsresult);
 	});
});
