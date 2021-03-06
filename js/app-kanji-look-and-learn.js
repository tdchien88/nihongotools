
function renderTable(){
	var tb = document.getElementById("table_kanji");

	//convert listKanji to 2d array
	var tableData = [];
	while(listKanji.length) tableData.push(listKanji.splice(0,16));
	//console.log(tableData);

	var table = document.getElementById('table_kanji');
	var tableBody = document.createElement('tbody');

	tableData.forEach(function(rowData) {
	var row = document.createElement('tr');

	rowData.forEach(function(cellData) {
	  	var cell = document.createElement('td');

	  	var item = document.createElement('span');
	  	item.id = cellData.id+'-'+cellData.kanji;
	  	item.innerText  = cellData.kanji;

		cell.appendChild(item);
	  	row.appendChild(cell);
	});

	tableBody.appendChild(row);
	});

	table.appendChild(tableBody);
}

function search() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase().trim();
  table = document.getElementById("table_kanji");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for(var j =0; j<td.length;j++){
    	if (td[j]) {
	      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
	        td[j].style.display = "";
	      } else {
	        td[j].style.display = "none";
	      }
    	}    
    }
       
  }
}

function displayImg(element){
	$('#myImg').attr('src', "./imgs/"+element.id+'.png');
	$('span').removeClass('active');
    $(element).addClass('active');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(e){
	
	renderTable();

	$('span').click(function(e){
   		console.log(this.id);
   		displayImg(this);
   		
	});

	$('#myInput').keyup(function(e){
		//if(e.keyCode ==  13)
		search();
		if($("td:visible")[0]){
			displayImg($("td:visible")[0].childNodes[0]);
		}
		
	});


});
