// Generated by CoffeeScript 1.7.1
(function() {
  (function($) {
    return $(function() {
      var $form, $nav, $reveal, $search, $searchParent, toggleNav, toggleSearch;
      $nav = $('#n-mobile');
      $reveal = $('#n-reveal');
      $nav.hide();
      $nav.addClass('collapsed');
      toggleNav = function() {
        $reveal.blur();
        if ($nav.hasClass('collapsed')) {
          $nav.removeClass('collapsed');
          $nav.slideDown(250);
        } else {
          $nav.addClass('collapsed');
          $nav.slideUp(250);
        }
        return false;
      };
      $reveal.click(toggleNav);
      $search = $('#n .menu-item [title="Search"]');
      $searchParent = $search.parent();
      $form = $('#n-search');
      toggleSearch = function() {
        $searchParent.toggleClass('active');
        if ($searchParent.hasClass('active')) {
          $form.slideDown(250);
        } else {
          $form.slideUp(250);
        }
        return false;
      };
      return $search.click(toggleSearch);
    });
  })(jQuery);

}).call(this);
