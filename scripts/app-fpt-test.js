

var listError = [];
var timecout = 6;
var arrRandomedNumber = [];
var curTuVung = getRandomInt(0, listTuVung.length-1);
var score = 1000;
var startError = false;
var total = 0;
var tuDung = 0;

function dung(){
	if(startError && listError.length>0){
		listError.splice(curTuVung, 1);
		var elem = document.getElementById('errorID_'+curTuVung);
		if(elem != null)
		elem.parentNode.removeChild(elem);
	}
	tuDung++;
	next();
}

function sai(){

	score -= 25;
	$("#score").text(score);

	if(startError == false){
		
		var ul = document.getElementById("errorList");
		var li = document.createElement("li");
		li.id = 'errorID_'+listError.length;
	  	//li.appendChild(document.createTextNode(JSON.stringify(listTuVung[curTuVung])+","));
	  	var kanji = listTuVung[curTuVung].kanji;
	  	if(kanji == undefined || kanji == "")
	  		kanji = listTuVung[curTuVung].hiragana;
		li.appendChild(document.createTextNode(kanji));

		var att = document.createAttribute("alt");       
		att.value = listTuVung[curTuVung].hiragana + ' - ' + listTuVung[curTuVung].meaning;
		li.setAttributeNode(att);
		li.onmouseover = function() {
		    var altText = $( this ).attr( "alt" );   
			$( this ).append( "<span>    [ "+altText+" ]</span>" );
		};

		li.onmouseout = function(){
			$( "#errorList li span" ).remove();
		}
	  	
	  	ul.appendChild(li);
	  	listError.push(listTuVung[curTuVung]);
	}
	

	next();

}



function getRandomInt(min, max) {
	if(startError == false && arrRandomedNumber.length > max){
		alert('end');
		arrRandomedNumber = [];
		startError = true;
	}

	var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
	
	//if(randomnumber == undefined) return 0;

	while(arrRandomedNumber.indexOf(randomnumber) > -1){
		randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
	//	if(randomnumber == undefined) return 0;
	}
	arrRandomedNumber.push(randomnumber);
	return randomnumber;
}

function autoNext(){
	
	if(startError == false){
		curTuVung = getRandomInt(0, listTuVung.length-1);
	}else if(listError.length > 0){
		curTuVung = getRandomInt(0, listError.length-1);
	}else{
		$("#kanji").val('上手');
		$("#ans").val("じょうず - giỏi quá");
		return ;
	}
	
	var kanji = listTuVung[curTuVung].kanji;
	if(kanji == null || kanji == "")
		kanji = listTuVung[curTuVung].hiragana;
	$("#kanji").val(kanji);
	
	$("#total").text(listTuVung.length + ' [Đ:'+ tuDung  +' / S:' +listError.length + ']');

	$("#ans").val("");
	startTimer(timecout, $('#time'));
	$("#btnOK").prop('disabled', false);
}

function next(){
	if(xIV != null)
		stopCountdown();

	autoNext();
}
function show(){
	if(xIV != null)
		stopCountdown();
	timeout();
}

var xIV = null;
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	xIV =  setInterval(function () {
		minutes = parseInt(timer / 60, 10)
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.text(minutes + ":" + seconds);

		if (--timer < 0) {
			//timer = duration;
			timeout();
		}
	}, 1000);
}

function stopCountdown(){
	clearInterval(xIV);
	xIV = null;
}
function timeout(){
	stopCountdown();
	$("#ans").val(listTuVung[curTuVung].hiragana 
		      +' - ' 
		      + listTuVung[curTuVung].meaning
		      +' - [' 
		      + listTuVung[curTuVung].hannom.toUpperCase()
		      +']'
		     );
	
	if($("#autoNext").prop("checked")){
		//sai();
		setTimeout(autoNext,3000);
	}
	
	//$("#btnOK").prop('disabled', true);
	
}

$(document).ready(function(e){
	$("#kanji").val(listTuVung[curTuVung].kanji);
	$("#ans").val("");
	startTimer(timecout, $('#time'));
	$("#btnOK").click(function(e){
		dung();
	});
	$("#btnNG").click(function(e){
		sai();
	});
	$("#kanji").click(function(e){
		show();
	});
});

$(document).keypress(function(e){
	//var checkWebkitandIE=(e.which==26 ? 1 : 0);
	//var checkMoz=(e.which==122 && e.ctrlKey ? 1 : 0);

	//$("body").append(e.which);
	if(e.which == 100){
		//dung
		dung();
	}else if(e.which == 115){
		//sai
		sai();
	}else if(e.which == 13){
		//enter
		next();
	}else if(e.which == 32){
		//space
		show();
	}

});
