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
    }).on('loaderGone', function() {
        App.$htmlBody.removeClass('ovf-hidden');
        App.$body.addClass('loaded');
        goToHash();
    });

    function imgLoaded() {
        onResize();
        loader.destroy();
        App.$win.trigger('siteLoaded');
    }

    App.$body.imagesLoaded({
        background: '.lazy-bg'
    }).always( function( instance ) {
        //console.log('all images loaded');
    })
    .done( function( instance ) {
        //console.log('all images successfully loaded');
        imgLoaded();
    })
    .fail( function() {
        //console.log('all images loaded, at least one is broken');
    })
    .progress( function( instance, image ) {
        //var result = image.isLoaded ? 'loaded' : 'broken';
        //console.log( 'image is ' + result + ' for ' + image.img.src );
        //document.title = image.img.src;
    });

    onResize();

})(jQuery, App);