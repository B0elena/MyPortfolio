$(function() {
  var $a = $('#a');
  var $b = $('#b');
  var $c = $('#c');
  var $d = $('#d');
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
  $a.on('click', function() {
    $nav.removeClass( open );
  });
  $b.on('click', function() {
    $nav.removeClass( open );
  });
  $c.on('click', function() {
    $nav.removeClass( open );
  });
  $d.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);