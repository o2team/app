<header id="header" class="banner">
    <div class="content">
        <h1><a href="/" class="banner-link">{{config.subtitle}}</a></h1>
        <p class="banner-tit">{{config.fulltitle}}</p>
        <p class="banner-desc">{{config.subtitle_desc}}</p>
        <ul class="actions">
            <li class="btn-wrap btn-wrap-download"><a href="{{config.iosLink}}" class="btn btn-white btn-download"><i class="fa fa-download"></i>&nbsp;V{{config.version}}</a></li>
            <li class="btn-wrap btn-wrap-more"><a href="{{url_for('notes')}}" class="btn btn-whiteline btn-more"><i class="fa fa-chevron-right"></i>&nbsp;版本详情</a></li>
        </ul>
        <div class="alert alert-danger alert-android">
            Android版本正在开发中，敬请期待.
        </div>

        <div class="image qrcode-ios">
            <img src="img/ios-qr.png" alt="IOS App"/>
        </div>
    </div>
    <div class="image phones wait-for-img">
        <div class="inner">
            <img src="//storage.360buyimg.com/mtd/home/screen_11478281631993.png" alt="{{config.subtitle}}"/>
            <img src="//storage.360buyimg.com/mtd/home/screen_21478281632046.png" alt="{{config.subtitle}}"/>
        </div>
    </div>
</header>