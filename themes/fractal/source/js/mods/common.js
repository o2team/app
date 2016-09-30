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

    function finishLoaded () {
        console.log('Site finish loaded.') 
        onResize();
        loader.destroy();
        App.$win.trigger('siteLoaded');
    }

    function waitForLoaded () {
        var imgElems = document.querySelectorAll('.wait-for-img img')
        if (!imgElems.length) {
            console.log('Finish loaded without any images waiting.')
            return finishLoaded()
        }

        var doneCount = 0, timeoutToken
        function imgOnLoadHandler () {
            doneCount++
            if (doneCount === imgElems.length) {
                timeoutToken && clearTimeout(timeoutToken)
                finishLoaded()
            }
        }

        // still reveal page if images are loaded overtime
        timeoutToken = setTimeout(function () {
            console.log('Images loaded overtime, finished: %s/%s', doneCount, imgElems.length)
            finishLoaded()
        }, 6000)
        
        // track down images fetch status
        Array.prototype.slice.call(imgElems).forEach(function (img) {
            if (img.complete) {
                return imgOnLoadHandler()
            } else {
                img.onload = imgOnLoadHandler
                img.onerror = imgOnLoadHandler
                img.onabort = imgOnLoadHandler
            }
        })
    }

    waitForLoaded();
    onResize();

})(jQuery, App);