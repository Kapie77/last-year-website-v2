var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/*jshint browser:true, devel:true */
/*global document */

var WPMLLanguageSwitcherDropdown = (function() {
	"use strict";

	var toggleSelector = '.js-wpml-ls-legacy-dropdown a.js-wpml-ls-item-toggle';

	var preventDefault = function(e) {
		var evt = e ? e : window.event;

		if (evt.preventDefault) {
			evt.preventDefault();
		}

		evt.returnValue = false;
	};

	var init = function() {
		var links = document.querySelectorAll(toggleSelector);
		for(var i=0; i < links.length; i++) {
			links[i].addEventListener('click', preventDefault );
		}
	};

	return {
		'init': init
	};

})();

document.addEventListener('DOMContentLoaded', function(){
	"use strict";
	WPMLLanguageSwitcherDropdown.init();
});
}

/*
     FILE ARCHIVED ON 09:16:43 Aug 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:41:16 Oct 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.466
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.087
  esindex: 0.007
  cdx.remote: 6.938
  LoadShardBlock: 57.63 (3)
  PetaboxLoader3.datanode: 77.411 (4)
  load_resource: 59.491
  PetaboxLoader3.resolve: 36.954
*/