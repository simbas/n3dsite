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
	var active = function(ev) {
		var link = this.href;
		var top = document.querySelector("#top");
		if(link.indexOf('one') > -1){
			top.className = 'one';
		}else if(link.indexOf('two') > -1) {
			top.className = 'two';
		}else if(link.indexOf('three') > -1) {
			top.className = 'three';
		}else if(link.indexOf('four') > -1) {
			top.className = 'four';
		}
	}

	document.addEventListener('DOMContentLoaded', function(ev){
		setInterval(center, 42);
		//this.addEventListener("keyup", control, false);
		var anchors = this.querySelectorAll("#bottom a[href$='.mpo']");
		for(var i = 0, l = anchors.length; i<l; i++){
			anchors[i].addEventListener('focus', active, false);
		}
		this.querySelector("#bottom a[href*='one']").focus();
	}, false);
})()
