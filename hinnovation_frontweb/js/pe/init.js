<<<<<<< HEAD
/*jslint undef: false, browser: true, devel: false, eqeqeq: false, bitwise: false, white: false, plusplus: false, regexp: false, nomen: false */ 
/*global jQuery,setTimeout,projekktor,location,setInterval,YT,clearInterval,pixelentity,influx_load,yepnope */
jQuery(function($){
	
	if (window.peFallBackPlayer) {
		$.pixelentity.video.fallBackPlayer = decodeURIComponent(window.peFallBackPlayer.url);
	}
	
	pixelentity.controller = new pixelentity.classes.Controller();		
	
=======
/*jslint undef: false, browser: true, devel: false, eqeqeq: false, bitwise: false, white: false, plusplus: false, regexp: false, nomen: false */ 
/*global jQuery,setTimeout,projekktor,location,setInterval,YT,clearInterval,pixelentity,influx_load,yepnope */
jQuery(function($){
	
	if (window.peFallBackPlayer) {
		$.pixelentity.video.fallBackPlayer = decodeURIComponent(window.peFallBackPlayer.url);
	}
	
	pixelentity.controller = new pixelentity.classes.Controller();		
	
>>>>>>> 2a7c8708be9e8802e63e5c3ff3c261cba24fea84
});