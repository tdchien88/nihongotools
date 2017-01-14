var listLession=[
//{'label':'bài 8','link':"b8.js", 'val':'b8'},
{'label':'bài 9','link':"b9.js", 'val':'b9'},
{'label':'bài 10','link':"b10.js", 'val':'b10'},
{'label':'bài 11','link':"b11.js", 'val':'b11'},
];

for(i in listLession){
	loadjscssfile(listLession[i].link, "js");
}




var listError = [];
var timecout = 6;
var arrRandomedNumber = [];
var curTuVung;// = getRandomInt(0, listTuVung.length-1);
var score = 1000;
var startError = false;
var total = 0;
var tuDung = 0;

function dung(){
	$("#btnOK").blur();
	if(startError && listError.length == 0){
		return;
	}
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
	$("#btnNG").blur();
	if(startError && listError.length == 0){
		return;
	}
	score -= 25;
	

	if(startError == false){
		
		var ul = document.getElementById("errorList");
		var li = document.createElement("li");
		li.id = 'errorID_'+listError.length;
		li.className  = 'list-group-item';
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
		next();
		return -1;
	}

	var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
	
	//if(randomnumber == undefined) return 0;
	if(arrRandomedNumber.length <= max){
		while(arrRandomedNumber.indexOf(randomnumber) > -1){
			randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
		//	if(randomnumber == undefined) return 0;
		}
		
	}
	if(startError && arrRandomedNumber.length > max){
		arrRandomedNumber = [];
	}

	arrRandomedNumber.push(randomnumber);

	return randomnumber;
}

function autoNext(){
	var kanji = '';
	var temp = '';
	if(startError == false){
		curTuVung = getRandomInt(0, listTuVung.length-1);
		temp = listTuVung[curTuVung];
		
	}

	if(startError && listError.length > 0){
		curTuVung = getRandomInt(0, listError.length-1);
		temp = listError[curTuVung];
	}else if(startError && listError.length == 0){
		$("#kanji").val('上手');
		$("#ans").val("じょうず - giỏi quá");
		$("#total").text(listTuVung.length + ' [Đ:'+ tuDung  +' / S:' +listError.length + ']');
		$("#errorList").empty();
		return ;
	}
	if(curTuVung ==null){
		console.log('error curTuVung = null')
		return;
	}

	kanji = temp.kanji;
	if(kanji == null || kanji == "")
		hiragana = temp.hiragana;
	
	$("#kanji").val(kanji);
	
	$("#total").text(listTuVung.length + ' [Đ:'+ tuDung  +' / S:' +listError.length + ']');

	$("#ans").val("");
	startTimer(timecout, $('#time'));
	$("#btnOK").prop('disabled', false);
}

function next(){
	if(xIV != null)
		stopCountdown();
	

	$("#score").text(score);

	autoNext();
}
function show(){
	if(xIV != null)
		stopCountdown();

	if(startError && listError.length == 0){
		return;
	}
	
	timeout();
}

var xIV = null;
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	if(xIV == null){
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
	
}

function stopCountdown(){
	clearInterval(xIV);
	xIV = null;
}
function timeout(){
	stopCountdown();
	if(startError && listError.length>0){
		$("#ans").val(listError[curTuVung].hiragana 
		      +' - ' 
		      + listError[curTuVung].meaning
		      +' - [' 
		      + listError[curTuVung].hannom.toUpperCase()
		      +']'
		     );
	}
	else{
		$("#ans").val(listTuVung[curTuVung].hiragana 
		      +' - ' 
		      + listTuVung[curTuVung].meaning
		      +' - [' 
		      + listTuVung[curTuVung].hannom.toUpperCase()
		      +']'
		     );
	}
	
	
	if($("#autoNext").prop("checked")){
		//sai();
		setTimeout(autoNext,3000);
	}
	
	//$("#btnOK").prop('disabled', true);
	
}

function selectedLession(valueSelected){
	clearInterval(xIV);
	listError = [];
	arrRandomedNumber = [];
	score = 1000;
	startError = false;
	total = 0;
	tuDung = 0;
	$("#errorList").empty();
	listTuVung = eval(valueSelected);
	next();

	$('#kanji').focus();
}

function init (){
	for(i in listLession){
		var select = document.getElementById('lessions');
		var opt = document.createElement('option');
	    opt.value = listLession[i].val;
	    opt.innerHTML = listLession[i].label;
	    select.appendChild(opt);

	}

	$('#lessions').val(listLession[listLession.length-1].val)
	listTuVung = eval(listLession[listLession.length-1].val);
	next();
}

$(window).on('load', function() {
    // your code here
    init ();

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

	$('#lessions').change(function(e){
    	var valueSelected = this.value;
    	selectedLession(valueSelected);
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
	}

});

$(document).keydown(function(e) {
    if (e.which == 32) {
    	show();
        return false;
    }
});


function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", "json/"+filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}