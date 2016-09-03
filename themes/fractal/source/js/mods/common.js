/* global App */
(function($, App) {

    $.extend(App, {
        $win: $(window),
        $doc: $(document),
        $body: $('body'),
        $html: $('html'),
        $htmlBody: $('html, body'),
        $fullPages: $('.fullscreen')
    });

    if(App.browser) {
        App.$html.addClass(App.browser.os.android ? 'android' : '');
    }

    function onResize() {
        App.winH = App.$win.height();
        App.winW = App.$win.width();
        App.$fullPages.height(App.winH);
    }

    var loader = {
        destroy: function() {
            var $dom = $("#loader").delay(500).fadeOut('slow', function() {
                $dom.remove();
                App.$win.trigger('loaderGone');
            });
        }
    };

    function goToHash() {
        var hash = location.hash,
            $hash = $(hash);
        if(hash.length > 0 && $hash.length > 0) {
            window.scrollTo(0, $hash.offset().top);
        }
    }

    App.$win.on('resize', function() {
        onResize();
        App.$win.trigger('siteResized');
    }).on('load', function() {
        onResize();
        loader.destroy();
        App.$win.trigger('siteLoaded');
    }).on('loaderGone', function() {
        App.$htmlBody.removeClass('ovf-hidden');
        App.$body.addClass('loaded');
        goToHash();
    });

    onResize();

})(jQuery, App);