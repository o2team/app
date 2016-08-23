/* global App */
(function($, App) {

    $.extend(App, {
        $win: $(window),
        $doc: $(document),
        $body: $('body'),
        $htmlBody: $('html, body'),
        $fullPages: $('.fullscreen')
    });

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

    App.$win.on('resize', function() {
        onResize();
        App.$win.trigger('siteResized');
    }).on('load', function() {
        onResize();
        loader.destroy();
        App.$win.trigger('siteLoaded');
    }).on('loaderGone', function() {
        App.$htmlBody.removeClass('ovf-hidden');
    });

    onResize();

})(jQuery, App);