(function(){
	var center = function(){
			window.scrollTo(40, 220);
	};
	var control = function(ev) {
		switch(ev.which) {
			case 13: alert("A"); break; //A
			case 37: alert("left"); break; //left arrow
			case 38: alert("up"); break; //up arrow
			case 39: alert("right"); break; //right arrow
			case 40: alert("down"); break; //down arrow
		}
	};
	var regex = new RegExp('\/([a-z]*).mpo$');
	var active = function(ev) {
		var link = this.href;
		var top = document.querySelector("#top");
		var result = regex.exec(link);
		if(result.length>1){
			top.className = result[1];
		}
	};
	
	var inactive = function(ev) {
		var top = document.querySelector("#top");
		top.className = '';
	};

	document.addEventListener('DOMContentLoaded', function(ev){
		setInterval(center, 42);
		var anchors = this.querySelectorAll("#bottom a[href$='.mpo']");
		for(var i = 0, l = anchors.length; i<l; i++){
			anchors[i].addEventListener('focus', active, false);
			anchors[i].addEventListener('blur', inactive, false);
		}
	}, false);
})()

// 
