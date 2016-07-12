// Pass jquery to IIFE as $ so we know $ is always = jQuery
(function($){
  'use strict';


  $(document).ready(function(){
      $("div.div1").click(function(){
          $("div.1").toggleClass("main");
      });
  });
  $(document).ready(function(){
      $("div.div2").click(function(){
          $("div.2").toggleClass("main1");
      });
  });
  $(document).ready(function(){
      $("div.div3").click(function(){
          $("div.3").toggleClass("main2");
      });
  });


}(jQuery));
