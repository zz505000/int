var intScripts = (function ($) {
  function init () {
    $('.results-table').dynatable();
  }

  return {
    init : init
  };
}(jQuery));

intScripts.init();