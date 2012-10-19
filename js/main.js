/*
var control = function(ev) {
	switch(ev.which) {
		case 13: alert("A"); break;
		case 37: alert("left"); break;
		case 38: alert("up"); break;
		case 39: alert("right"); break;
		case 40: alert("down"); break;
	}
};
*/

(function(){
	var DEFAULT = 'img/zero.png';
	
	var center = function(){
		window.scrollTo(40, 220);
	};
	
	var init = function(anchors) {
		var link;
		for(var i = 0, l = anchors.length; i<l; i++){
			link = anchors[i].href;
			anchors[i].style.background = "url("+link+")";
		}
	};
	
	var active = function(ev) {
		var top = document.getElementById("top");
		var value = this.style.background;
		top.style.background = value;
	};
	
	var inactive = function(ev) {
		var top = document.getElementById("top");
		top.style.background = "url("+DEFAULT+")";
	};

	document.addEventListener('DOMContentLoaded', function(ev) {
		setInterval(center, 42);
		var anchors = this.querySelectorAll("#bottom a[href$='.mpo']");
		init(anchors);
		inactive();
		for(var i = 0, l = anchors.length; i<l; i++){
			anchors[i].addEventListener('focus', active, false);
			anchors[i].addEventListener('blur', inactive, false);
		}
	}, false);
})()
