(function($) {

    "use strict";
  
      var $main_window = $(window);
      
      /*====================================
      preloader js
      ======================================*/
      $main_window.on("load", function() {
          $("#preloader").fadeOut("slow");
      });

})(jQuery);