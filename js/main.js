var audio = new Audio('https://firebasestorage.googleapis.com/v0/b/sitelook-cd816.appspot.com/o/cancion.webm?alt=media&token=7d31887f-c161-4a96-809b-076e7bc40a77');

window.onload = function(){
	var nav = document.getElementsByClassName("nav")[0];
	var navItems = nav.getElementsByTagName("li");
	var contentItems = document.getElementsByClassName("contenido");
	var indicator = document.getElementById("indicador");
	var header = document.getElementsByClassName("header big")[0];
	var reference = 5334 / 4;
	var yPage = 0;

	
	


	var appearFunction;
	
	for (var i = 1; i < contentItems.length; i++) {
		var node = document.createElement("li");
		node.setAttribute("value",i);
		nav.getElementsByTagName("ul")[0].appendChild(node);
		navItems = nav.getElementsByTagName("li");
		navItems[i].setAttribute("class","li");
	}
	
	
	
	document.body.onscroll = function(){
		
		yPage = Math.round(window.pageYOffset);
		clearTimeout(appearFunction);
		if(yPage < reference * 5){
			appearFunction = setTimeout(function(){
			indicator.setAttribute("class","appear");
		},10000);
		}
		
		
		indicator.setAttribute("class","disappear");
		for (var i = 0; i < contentItems.length; i++) {
		
		if(yPage >= reference * i &&
		 yPage < reference * (i + 1))
		{
			contentItems[i].setAttribute("class","contenido appear");
			if(i==0){
				header.setAttribute("class", "header big");
			}
			
		}
		else{
			if(i == contentItems.length -1){
				console.log(yPage >= reference * i &&
					yPage < reference * (i + 1));
				console.log([reference * i, reference * (i + 1), yPage]);
			}
			
			contentItems[i].setAttribute("class", "contenido disappear");
			if(i==0){
				header.setAttribute("class", "header small");
			}
		}
	}
		for (var i = 0; i < navItems.length; i++) {
			navItems[i].setAttribute("class","li");
			if(yPage >= reference * i &&
		    yPage < reference * (i + 1))
		    {   
			    navItems[i].setAttribute("class","li activo");
		    }
	    }
	}
	for(const navItem of navItems)
	{
		navItem.addEventListener('click',function(e){
			for(const nI of navItems)
			{
				nI.setAttribute("class","li");
			}
			navItem.setAttribute("class","li activo");
			window.scrollTo(0,navItem.getAttribute("value") * reference + 1);
			yPage = window.pageYOffset;

			
			
			
		})
	}

	window.onresize = function () {
		scrollTo(0,999999);
		yPage = Math.round(window.pageYOffset);
		reference = (yPage - 300) / (contentItems.length - 1);
		scrollTo(0,0);
		yPage = Page = Math.round(window.pageYOffset);
		yPage = Math.round(window.pageYOffset);
	}
}



