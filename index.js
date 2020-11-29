$(function() {
  const $a = $('#a');
  const $b = $('#b');
  const $c = $('#c');
  const $d = $('#d');
  const $nav   = $('#navArea');
  const $btn   = $('.toggle_btn');
  const $mask  = $('#mask');
  const open   = 'open';

  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });

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
});


$(function(){
  $(window).scroll(function (){
      $('trigger').each(function(){
          let position = $(this).offset().top;
              scroll = $(window).scrollTop();
              windowHeight = $(window).height();
          if (scroll > position - windowHeight){
            $(this).addClass('active');
          }
      });
  });
});