var intScripts = (function ($) {
  function init () {
    // $('.results-table').dynatable();
    $('.results-table').DataTable({
      'dom': ''
    });
    // $('select').customSelect();
    $('.navbar-nav').on('click', '.dropdown-menu', function(e) {
      e.stopPropagation();
    });
    $('.datepicker').datepicker();
  }

  return {
    init : init
  };
}(jQuery));

intScripts.init();