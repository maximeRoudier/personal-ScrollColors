$(document).ready(function() {
  $(window).scroll(function() {
    // variables
    var $window = $(window),
        $body = $('body'),
        $travaux = $('.travaux');

    var scroll = $window.scrollTop() + ($window.height() / 3);

    $travaux.each(function () {
      let $this = $(this);
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        $body.addClass('color-' + $(this).data('color'));
      }
    });
  }).scroll();


  $('.anchor-scroll').anchorScroll({
     scrollSpeed: 800, // scroll speed
     offsetTop: 0,
     onScroll: function () {
     },
     scrollEnd: function () {
     }
  });
});
