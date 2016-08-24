<section class="sec features" id="features">
    <header class="sec-hd">
        <h2 class="sec-tit">{{site.data.features.brands.title}}</h2>
        <p class="sec-stit">{{site.data.features.brands.stitle}}</p>
    </header>
    <ul class="features-list">
        <li title="V1.0 第一手互联网专业资讯" class="active"><i class="fa fa-book" aria-hidden="true"></i></li>
        <li title="V2.0 把握互联网专业的线上线下活动 敬请期待"><i class="fa fa-calendar" aria-hidden="true"></i></li>
        <li title="V3.0 各种有趣『话题』的滋生地 敬请期待"><i class="fa fa-group" aria-hidden="true"></i></li>
    </ul>
</section>

<section class="sec brands">
    <div class="sec-inner">
        {% for item in site.data.features.brands.items %}
        <section class="alter spotlight">
            <div class="alter-hd spotlight-hd"><a href="{{item.preview}}" target="_blank"><img src="{{item.logo}}" alt="{{item.name}}" /></a></div>
            <div class="alter-bd spotlight-bd">
                <h3><a href="{{item.preview}}" target="_blank" title="{{item.name}}">{{item.name}}</a></h3>
                <p>{{item.desc}}</p>
            </div>
        </section>
        {% endfor %}
    </div>
</section>

<section class="sec specials">
    <div class="sec-inner">
        <header class="sec-hd">
            <h2 class="sec-tit">{{site.data.features.specials.title}}</h2>
        </header>
        <ul class="specials-list">
            {% for item in site.data.features.specials.items %}
            <li>
                <div class="special"><span class="icon-wrap"><i class="fa {{item.logo}}" aria-hidden="true"></i></span><span class="label">{{item.name}}</span></div>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>