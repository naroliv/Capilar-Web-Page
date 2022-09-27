

window.onload = function(){
	var upButton = document.getElementById("up");
	var scroller = document.getElementsByClassName("scroller")[0];


	
	
	upButton.onclick = function(){
		scroller.scrollTo({top:0, behavior:'smooth'});
		
	}

}

