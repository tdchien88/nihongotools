var listLession=[
//{'label':'bài 8','link':"b8.js", 'val':'b8'},
{'label':'bài 9','link':"b9.js", 'val':'b9'},
{'label':'bài 10','link':"b10.js", 'val':'b10'},
{'label':'kanji 13-14','link':"kanji13-14.js", 'val':'kanji1314'},
{'label':'bài 11','link':"b11.js", 'val':'b11'},
{'label':'bài 12','link':"b12.js", 'val':'b12'},
{'label':'bài 13','link':"b13.js", 'val':'b13'},
];

for(i in listLession){
	loadjscssfile(listLession[i].link, "js");
}




var listWrong = [];
var timecout = 6;
var arrRandomedNumber = [];
var curTuVung;// = getRandomInt(0, listTuVung.length-1);
var score = 1000;
var startWrong = false;
var total = 0;
var tuDung = 0;

function dung(){
	$("#btnOK").blur();
	if(startWrong && listWrong.length == 0){
		return;
	}
	if(startWrong && listWrong.length>0){
		
		var elem = document.getElementById('wrongID_'+listWrong[curTuVung].index);
		if(elem != null)
		elem.parentNode.removeChild(elem);

		listWrong.splice(curTuVung, 1);
	}
	tuDung++;
	next();
	
}

function sai(){
	$("#btnNG").blur();
	if(startWrong && listWrong.length == 0){
		return;
	}
	score -= 25;
	

	if(startWrong == false){
		
		var ul = document.getElementById("wrongList");
		var li = document.createElement("li");
		li.id = 'wrongID_'+curTuVung;
		li.className  = 'list-group-item';

	  	var kanji = listTuVung[curTuVung].kanji;
	  	if(kanji == undefined || kanji == "")
	  		kanji = listTuVung[curTuVung].hiragana;
	  	
		li.appendChild(document.createTextNode(kanji));

		var alt = document.createAttribute("altIndex");       
		alt.value = curTuVung;
		li.setAttributeNode(alt);


		li.onmouseover = function() {
		    var index = $( this ).attr( "altIndex" );  
		    var altText = listTuVung[index].hiragana + ' - ' + listTuVung[index].meaning 

			$( this ).text(listTuVung[index].kanji +' ['+ altText+']');

		};

		li.onmouseout = function(){
			var index = $( this ).attr( "altIndex" ); 
			$(this).text(listTuVung[index].kanji);
		}
	  	
	  	//ul.appendChild(li);
	  	ul.insertBefore(li, ul.childNodes[0]);
	  	listTuVung[curTuVung].index = curTuVung;
	  	listWrong.push(listTuVung[curTuVung]);
	}
	

	next();

}



function getRandomInt(min, max) {
	if(startWrong == false && arrRandomedNumber.length > max){
		alert('end');
		arrRandomedNumber = [];
		startWrong = true;
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
	if(startWrong && arrRandomedNumber.length > max){
		arrRandomedNumber = [];
	}

	arrRandomedNumber.push(randomnumber);

	return randomnumber;
}

function autoNext(){
	var kanji = '';
	var temp = '';
	if(startWrong == false){
		curTuVung = getRandomInt(0, listTuVung.length-1);
		temp = listTuVung[curTuVung];
		
	}

	if(startWrong && listWrong.length > 0){
		curTuVung = getRandomInt(0, listWrong.length-1);
		temp = listWrong[curTuVung];
	}else if(startWrong && listWrong.length == 0){
		$("#kanji").val('上手');
		$("#ans").val("じょうず - giỏi quá");
		$("#total").text(listTuVung.length + ' [Đ:'+ tuDung  +' / S:' +listWrong.length + ']');
		$("#wrongList").empty();
		return ;
	}
	if(curTuVung ==null){
		console.log('wrong curTuVung = null')
		return;
	}

	kanji = temp.kanji;
	if(kanji == null || kanji == "")
		hiragana = temp.hiragana;
	
	$("#kanji").val(kanji);
	
	$("#total").text(listTuVung.length + ' [Đ:'+ tuDung  +' / S:' +listWrong.length + ']');

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

	if(startWrong && listWrong.length == 0){
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
	if(startWrong && listWrong.length>0){
		$("#ans").val(listWrong[curTuVung].hiragana 
		      +' - ' 
		      + listWrong[curTuVung].meaning
		      +' - [' 
		      + listWrong[curTuVung].hannom.toUpperCase()
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
	listWrong = [];
	arrRandomedNumber = [];
	score = 1000;
	startWrong = false;
	total = 0;
	tuDung = 0;
	$("#wrongList").empty();
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