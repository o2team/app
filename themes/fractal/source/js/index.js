(function($) {
  $(function () {
    var $intro = $('.intro')
    var $introOpts = $('.intro--options a')
    var $introBannerTag = $('.intro--banner-tag')
    var introDuration = 5000
    var introOptsActiveIndex = 0
    // 初始化状态
    $introOpts.eq(introOptsActiveIndex).addClass('is-active')
    $intro.attr('data-active-index', introOptsActiveIndex)
    $("#loader").fadeOut('slow', function() {
        $(this).remove();
        // App.$win.trigger('loaderne');
    });

    setInterval(function () {
      $introOpts.removeClass('is-active')
      introOptsActiveIndex++
      if (introOptsActiveIndex > $introOpts.length - 1) {
        introOptsActiveIndex = 0
      }
      $intro.attr('data-active-index', introOptsActiveIndex)
      var left = $introOpts.eq(introOptsActiveIndex).position().left
      $introBannerTag.css({
        '-webkit-transform': 'translateX(' + left + 'px)',
        '-moz-transform': 'translateX(' + left + 'px)',
        '-ms-transform': 'translateX(' + left + 'px)',
        '-o-transform': 'translateX(' + left + 'px)',
        'transform': 'translateX(' + left + 'px)'
      })
    }, introDuration)

})

})(jQuery);
