(function ($) {
  Drupal.behaviors.para = {
    attach: function (context, settings) {
			$('#navbar ul.menu', context).onePageNav({
				currentClass: 'active',
		    changeHash: false,
		    scrollSpeed: 750,
		    scrollOffset: 30,
		    scrollThreshold: 0.5,
		    filter: function(index) {
		    	// Filter only the links with a hash
		    	if(this.hash) {
		    		return this.hash;
		    	}
		    },
		    easing: 'swing',
		    begin: function() {
		    },
		    end: function() {
		        //I get fired when the animation is ending
		    },
		    scrollChange: function($currentListItem) {
		        //I get fired when you enter a section and I pass the list item of the section
		    }
			});
    }
  };
})(jQuery);