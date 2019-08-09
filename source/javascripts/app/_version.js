//= require ../lib/_jquery

;(function () {
  'use strict';

  $(function() {
    $(".version-selector").on("change", function() {
      window.location = '/' + this.value + '/';
    });
  });
})();
