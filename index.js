$(function() {
  const $a = $('#a');
  const $b = $('#b');
  const $c = $('#c');
  const $d = $('#d');
  const $nav   = $('#navArea');
  const $btn   = $('.toggle_btn');
  const $mask  = $('#mask');
  const open   = 'open'; // class
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