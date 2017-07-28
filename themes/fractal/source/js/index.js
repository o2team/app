(function($) {
  $(function () {
    // DOMMouseScroll included for firefox support
    var canScroll = true,
      scrollController = null;
    $(this).on('mousewheel DOMMouseScroll', function(e){

      if (!($('.outer-nav').hasClass('is-vis'))) {

        e.preventDefault();

        var delta = (e.originalEvent.wheelDelta) ? -e.originalEvent.wheelDelta : e.originalEvent.detail * 20;

        if (delta > 50 && canScroll) {
          canScroll = false;
          clearTimeout(scrollController);
          scrollController = setTimeout(function(){
            canScroll = true;
          }, 800);
          updateHelper(1);
        }
        else if (delta < -50 && canScroll) {
          canScroll = false;
          clearTimeout(scrollController);
          scrollController = setTimeout(function(){
            canScroll = true;
          }, 800);
          updateHelper(-1);
        }

      }

    });

    $('.side-nav li, .outer-nav li').click(function(){

      if (!($(this).hasClass('is-active'))) {

        var $this = $(this),
            curActive = $this.parent().find('.is-active'),
            curPos = $this.parent().children().index(curActive),
            nextPos = $this.parent().children().index($this),
            lastItem = $(this).parent().children().length - 1;

        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);

      }

    });

    $('.cta').click(function(){

      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 1,
          nextPos = lastItem;

      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);

    });

    // swipe support for touch devices
    var targetElement = document.getElementById('viewport'),
        mc = new Hammer(targetElement);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on('swipeup swipedown', function(e) {

      updateHelper(e);

    });

    $(document).keyup(function(e){

      if (!($('.outer-nav').hasClass('is-vis'))) {
        e.preventDefault();
        updateHelper(e);
      }

    });

    // determine scroll, swipe, and arrow key direction
    function updateHelper(param) {

      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 1,
          nextPos = 0;

      if (param.type === "swipeup" || param.keyCode === 40 || param > 0) {
        if (curPos !== lastItem) {
          nextPos = curPos + 1;
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
        else {
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
      }
      else if (param.type === "swipedown" || param.keyCode === 38 || param < 0){
        if (curPos !== 0){
          nextPos = curPos - 1;
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
        else {
          nextPos = lastItem;
          updateNavs(nextPos);
          updateContent(curPos, nextPos, lastItem);
        }
      }

    }

    // sync side and outer navigations
    function updateNavs(nextPos) {

      $('.side-nav, .outer-nav').children().removeClass('is-active');
      $('.side-nav').children().eq(nextPos).addClass('is-active');
      $('.outer-nav').children().eq(nextPos).addClass('is-active');

    }

    // update main content area
    function updateContent(curPos, nextPos, lastItem) {

      $('.main-content').children().removeClass('section--is-active');
      $('.main-content').children().eq(nextPos).addClass('section--is-active');
      $('.main-content .section').children().removeClass('section--next section--prev');

      if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
        $('.main-content .section').children().removeClass('section--next section--prev');
      }
      else if (curPos < nextPos) {
        $('.main-content').children().eq(curPos).children().addClass('section--next');
      }
      else {
        $('.main-content').children().eq(curPos).children().addClass('section--prev');
      }

      if (nextPos !== 0 && nextPos !== lastItem) {
        $('.header--cta').addClass('is-active');
      }
      else {
        $('.header--cta').removeClass('is-active');
      }

    }

    function outerNav() {

      $('.header--nav-toggle').click(function(){

        $('.perspective').addClass('perspective--modalview');
        setTimeout(function(){
          $('.perspective').addClass('effect-rotate-left--animate');
        }, 25);
        $('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

      });

      $('.outer-nav--return, .outer-nav li').click(function(){

        $('.perspective').removeClass('effect-rotate-left--animate');
        setTimeout(function(){
          $('.perspective').removeClass('perspective--modalview');
        }, 400);
        $('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

      });

    }

    function workSlider() {

      $('.slider--prev, .slider--next').click(function() {

        var $this = $(this),
            curLeft = $('.slider').find('.slider--item-left'),
            curLeftPos = $('.slider').children().index(curLeft),
            curCenter = $('.slider').find('.slider--item-center'),
            curCenterPos = $('.slider').children().index(curCenter),
            curRight = $('.slider').find('.slider--item-right'),
            curRightPos = $('.slider').children().index(curRight),
            totalWorks = $('.slider').children().length,
            $left = $('.slider--item-left'),
            $center = $('.slider--item-center'),
            $right = $('.slider--item-right'),
            $item = $('.slider--item');

        $('.slider').animate({ opacity : 0 }, 400);

        setTimeout(function(){

        if ($this.hasClass('slider--next')) {
          if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          }
          else {
            if (curLeftPos === totalWorks - 1) {
              $item.removeClass('slider--item-left').first().addClass('slider--item-left');
              $center.removeClass('slider--item-center').next().addClass('slider--item-center');
              $right.removeClass('slider--item-right').next().addClass('slider--item-right');
            }
            else if (curCenterPos === totalWorks - 1) {
              $left.removeClass('slider--item-left').next().addClass('slider--item-left');
              $item.removeClass('slider--item-center').first().addClass('slider--item-center');
              $right.removeClass('slider--item-right').next().addClass('slider--item-right');
            }
            else {
              $left.removeClass('slider--item-left').next().addClass('slider--item-left');
              $center.removeClass('slider--item-center').next().addClass('slider--item-center');
              $item.removeClass('slider--item-right').first().addClass('slider--item-right');
            }
          }
        }
        else {
          if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          }
          else {
            if (curLeftPos === 0) {
              $item.removeClass('slider--item-left').last().addClass('slider--item-left');
              $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
              $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
            }
            else if (curCenterPos === 0) {
              $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
              $item.removeClass('slider--item-center').last().addClass('slider--item-center');
              $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
            }
            else {
              $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
              $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
              $item.removeClass('slider--item-right').last().addClass('slider--item-right');
            }
          }
        }

      }, 400);

      $('.slider').animate({ opacity : 1 }, 400);

      });

    }

    function transitionLabels() {

      $('.work-request--information input').focusout(function(){

        var textVal = $(this).val();

        if (textVal === "") {
          $(this).removeClass('has-value');
        }
        else {
          $(this).addClass('has-value');
        }

        // correct mobile device window position
        window.scrollTo(0, 0);

      });

    }

    outerNav();
    workSlider();
    transitionLabels();

    // Slider, ADDed BY JC
    var slider = {
      $intro : $('.intro'),
      $introOpts : $('.intro--options-item'),
      $introBannerTag : $('.intro--banner-tag'),
      introDuration : 5000,
      introOptsActiveIndex : 0,
      timer: null,
      init: function () {
        // 初始化状态
        this.$introOpts.eq(this.introOptsActiveIndex).addClass('is-active');
        this.$intro.attr('data-active-index', this.introOptsActiveIndex);
        $('.intro--options').on('click, mouseenter', '.intro--options-item', function () {
          clearInterval(slider.timer);
          slider.changeIndexHandle($(this).index());
        }).on('mouseleave', '.intro--options-item', function () {
          slider.runIntro();
        });
        this.runIntro();
      },
      runIntro: function () {
        if (App.browser.os.mobile) return;
        var me = this;
        clearInterval(this.timer)
        this.timer = setInterval(function () {
          me.$introOpts.removeClass('is-active')
          me.introOptsActiveIndex++
          me.changeIndexHandle(me.introOptsActiveIndex)
        }, me.introDuration)
      },
      changeIndexHandle: function (index) {
        var me = this;
        me.introOptsActiveIndex = index
        if (me.introOptsActiveIndex > me.$introOpts.length - 1) {
          me.introOptsActiveIndex = 0
        }
        me.$intro.attr('data-active-index', me.introOptsActiveIndex)
        var left = me.$introOpts.eq(me.introOptsActiveIndex).position().left
        me.$introBannerTag.css({
          '-webkit-transform': 'translate3d(' + left + 'px, 0, 0)',
          '-moz-transform': 'translateX(' + left + 'px, 0, 0)',
          '-ms-transform': 'translateX(' + left + 'px, 0, 0)',
          '-o-transform': 'translateX(' + left + 'px, 0, 0)',
          'transform': 'translateX(' + left + 'px, 0, 0)'
        })
        if (index === 2) {
          cube.show('left')
        } else {
          cube.show('front')
        }
      }
    }

    slider.init();

    // cube
    var cube = {
      $cube: $('#cube'),
      init: function () {
        if (!App.browser.os.mobile) return;
      },
      show: function (cls) {
        var me = this;
        me.$cube.removeClass(['show--front', 'show--left', 'show--right', 'show--top', 'show--bottom', 'show--back'].join(' '))
        me.$cube.addClass('show--' + cls)
      }
    }

    cube.init();

})

})(jQuery);
