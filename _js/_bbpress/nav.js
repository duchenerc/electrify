// Generated by CoffeeScript 1.7.1
(function() {
  (function($) {
    var $h, $searchButton, $searchForm;
    $h = $('#h-bbpress');
    $searchButton = $('#h-bbpress .bbp-search a');
    $searchForm = $('#bbp-search-form');
    return $searchButton.click(function() {
      $searchButton.toggleClass('active');
      $searchForm.slideToggle(250);
      return false;
    });
  })(jQuery);

}).call(this);
