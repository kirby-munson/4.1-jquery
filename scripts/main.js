alert('hello');

// Pass jquery to IIFE as $ so we know $ is always = jQuery
(function($){
  'use strict';

    // Protect against DOM not being ready by wrapping code in jQuery callback
    $(function(){
      $('h1').text('Wow! jQuery is awesome');

    });

}(jQuery));
