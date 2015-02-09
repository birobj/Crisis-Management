Skip to content
Sign up Sign in This repository
Explore
Features
Enterprise
Blog
 Star 4,987  Fork 1,120 davatron5000/FitText.js
 branch: master  FitText.js/jquery.fittext.js
Neil Monroeneilmonroe on Jan 29, 2014 Update jquery.fittext.js
5 contributors Dave RupertManuel StrehlTim SvensenDarcy ClarkeNeil Monroe
44 lines (32 sloc)  1.074 kb RawBlameHistory   
/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
Status API Training Shop Blog About
© 2015 GitHub, Inc. Terms Privacy Security Contact
