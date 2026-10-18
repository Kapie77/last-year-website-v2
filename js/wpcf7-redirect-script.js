var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
jQuery(document).ready(function() {
    wpcf7_redirect_mailsent_handler();
});

function wpcf7_redirect_mailsent_handler() {
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		form = wpcf7_redirect_forms [ event.detail.contactFormId ];

		// Script to run after sent.
		if ( form.after_sent_script ) {
			form.after_sent_script = htmlspecialchars_decode( form.after_sent_script );
			eval( form.after_sent_script );
		}

		// Set redirect URL
		if ( form.use_external_url && form.external_url ) {
			redirect_url = form.external_url;
		} else {
			redirect_url = form.thankyou_page_url;
		}

		// Build http query
		if ( form.http_build_query ) {
			http_query 	 = jQuery.param( event.detail.inputs, true );
			redirect_url = redirect_url + '?' + http_query;
		} else if ( form.http_build_query_selectively ) {
			http_query = '?';
			selective_fields = form.http_build_query_selectively_fields.split(' ').join('');
			event.detail.inputs.forEach( function(element, index) {
				if ( selective_fields.indexOf( element.name ) != -1 ) {
					http_query += element.name + '=' + element.value + '&';
				}
			});

			http_query = http_query.slice(0, -1);
			redirect_url = redirect_url + http_query;
		} 

		// Redirect
		if ( redirect_url ) {
			if ( ! form.open_in_new_tab ) {
				// Open in current tab
				location.href = redirect_url;
			} else {
				// Open in external tab
				window.open( redirect_url );
			}
		}

	}, false );
}

function htmlspecialchars_decode( string ) {
	var map = {
        '&amp;': '&',
        '&#038;': "&",
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&#8217;': "’",
        '&#8216;': "‘",
        '&#8211;': "–",
        '&#8212;': "—",
        '&#8230;': "…",
        '&#8221;': '”'
    };

    return string.replace(/\&[\w\d\#]{2,5}\;/g, function(m) { return map[m]; });
}

}

/*
     FILE ARCHIVED ON 09:16:51 Aug 14, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:41:25 Oct 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.727
  exclusion.robots: 0.127
  exclusion.robots.policy: 0.116
  esindex: 0.013
  cdx.remote: 48.47
  LoadShardBlock: 165.591 (3)
  PetaboxLoader3.datanode: 127.5 (4)
  PetaboxLoader3.resolve: 293.843 (2)
  load_resource: 258.723
*/