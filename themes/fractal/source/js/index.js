(function($, App) {
    $('.scrolly').on('click', function() {
        scrollTo(this.getAttribute('href'));
        return false;
    });


    var scrollTo = function(id) {
        App.$htmlBody.animate({
            scrollTop: $(id).offset().top
        }, 1000);
    };

})(jQuery, App);