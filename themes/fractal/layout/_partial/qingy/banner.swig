<header id="header" class="banner">
    <div class="content">
        <h1><a href="/" class="banner-link">轻氧资讯</a></h1>
        <p class="banner-tit">{{config.fulltitle}}</p>
        <p class="banner-desc">{{config.subtitle_desc}}</p>
        <ul class="actions">
            <li class="btn-wrap btn-wrap-download"><a href="{{config.appLink}}" class="btn btn-download" style="color: #b3b3b3; background: #191919;"><i class="fa fa-apple"></i>&nbsp;下载 iOS</a></li>
            <li class="btn-wrap btn-wrap-download"><a href="{{config.appLink}}" id="android-download-btn" class="btn btn-download" style="background: #4CAF50; color: #fff;"><i class="fa fa-android"></i>&nbsp;下载 Android</a></li>
            <li class="btn-wrap btn-wrap-more"><a href="{{url_for('notes')}}" class="btn btn-whiteline btn-more"><i class="fa fa-chevron-right"></i>&nbsp;版本详情</a></li>
        </ul>

        <div class="image qrcode-ios">
            <img src="/img/ios-qr.png" alt="IOS App"/>
        </div>
    </div>
    <div class="image phones wait-for-img">
        <div class="inner">
            <div class="phones-left">
              <img src="//storage.360buyimg.com/mtd/home/screen_11478281631993.png" alt="{{config.subtitle}}"/>
            </div>
            <div class="phones-right">
              <img src="//storage.360buyimg.com/mtd/home/screen_21478281632046.png" alt="{{config.subtitle}}"/>
            </div>
        </div>
    </div>
    <div id="download-modal" class="modal-mask fade">
        <div class="modal-content">
            <h2 class="modal-title">Android 版本下载途径</h2>
            <ul class="download-list">
                <li class="btn-wrap"><a href="{{config.yingyongbaoLink}}" class="btn btn-whiteline" style="background-color: #3F51B5;">腾讯应用宝</a>
                <li class="btn-wrap"><a href="{{config.wandoujiaLink}}" class="btn btn-whiteline" style="background-color: #4CAF50;">豌豆荚</a>
            </ul>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', initDownload, false)
        function initDownload () {
            var modal = $('#download-modal')
            $('#android-download-btn').click(function (ev) {
                ev.preventDefault()
                modal.addClass('in')
                modal.removeClass('out')
                return false
            })
            modal.click(function (ev) {
                modal.removeClass('in')
                modal.addClass('out')
            })
        }
    </script>
</header>
