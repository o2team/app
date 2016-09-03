(function($, App) {

    var Browser = function() {
		this.width = document.documentElement.clientWidth,
		this.height = document.documentElement.clientHeight
	};
	Browser.prototype = {

		os: function() {
				var e = navigator.userAgent;
				navigator.appVersion;
				return {
					trident: e.indexOf("Trident") > -1,
					presto: e.indexOf("Presto") > -1,
					webKit: e.indexOf("AppleWebKit") > -1,
					gecko: e.indexOf("Gecko") > -1 && -1 == e.indexOf("KHTML"),
					mobile: !!e.match(/AppleWebKit.*Mobile.*/),
					ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
					android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
					iPhone: e.indexOf("iPhone") > -1,
					iPad: e.indexOf("iPad") > -1,
					webApp: -1 == e.indexOf("Safari"),
					weixin: e.indexOf("MicroMessenger") > -1,
					qq: " qq" == e.match(/\sQQ/i)
				}
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	};

    App.browser = new Browser();

})(jQuery, App);