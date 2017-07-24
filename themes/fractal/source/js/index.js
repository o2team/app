(function($) {
  $(function () {
    var $intro = $('.intro')
    var $introOpts = $('.intro--options-item')
    var $introBannerTag = $('.intro--banner-tag')
    var introDuration = 5000
    var introOptsActiveIndex = 0
    var timer
    // 初始化状态
    $introOpts.eq(introOptsActiveIndex).addClass('is-active')
    $intro.attr('data-active-index', introOptsActiveIndex)

    $('.intro--options').on('click', '.intro--options-item', function(e) {
      changeIndexHandle($(this).index())
      runIntro()
    })

    runIntro()

    function runIntro () {
      clearInterval(timer)
      timer = setInterval(function () {
        $introOpts.removeClass('is-active')
        introOptsActiveIndex++

        changeIndexHandle(introOptsActiveIndex)
      }, introDuration)
    }

    function changeIndexHandle (index) {
      introOptsActiveIndex = index
      if (introOptsActiveIndex > $introOpts.length - 1) {
        introOptsActiveIndex = 0
      }
      $intro.attr('data-active-index', introOptsActiveIndex)
      var left = $introOpts.eq(introOptsActiveIndex).position().left
      $introBannerTag.css({
        '-webkit-transform': 'translate3d(' + left + 'px, 0, 0)',
        '-moz-transform': 'translateX(' + left + 'px, 0, 0)',
        '-ms-transform': 'translateX(' + left + 'px, 0, 0)',
        '-o-transform': 'translateX(' + left + 'px, 0, 0)',
        'transform': 'translateX(' + left + 'px, 0, 0)'
      })
    }

})

})(jQuery);
