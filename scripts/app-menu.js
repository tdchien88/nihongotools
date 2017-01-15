$(document).ready(function(e){
	/*
	<li class="active"><a href="#section1">Home</a></li>
        <li><a href="#section2">Friends</a></li>
        <li><a href="#section3">Family</a></li>
        <li><a href="#section3">Photos</a></li>
        */
    for (var i = 0; i < listMenus.length ; i++) {
    	

    	var ul = document.getElementById("main-menu");
		var li = document.createElement("li");
		li.id = 'menuID_'+listMenus.length;
	  	
	  	var a = document.createElement('a');
		var linkText = document.createTextNode(listMenus[i].label);
		a.appendChild(linkText);
		a.title = listMenus[i].label;
		a.href = listMenus[i].link;
		//a.setAttribute('target','_blank');
		li.appendChild(a);

	  	ul.appendChild(li);
    }
	


});
