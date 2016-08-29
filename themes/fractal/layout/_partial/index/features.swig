<section class="sec sec-style1 channels" id="features">
    <div class="sec-inner">
        <header class="sec-hd">
            <h2 class="sec-tit">{{site.data.features.channels.items.length}}{{site.data.features.channels.title}}</h2>
            <p class="sec-stit">{{site.data.features.channels.stitle}}</p>
        </header>
        <ul class="icon-list channels-list">
            {% for item in site.data.features.channels.items %}
            <li>
                <div class="icon-item"><span class="icon-wrap"><i class="fa {{item.logo}}" aria-hidden="true"></i></span><span class="label">{{item.name}}</span></div>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>

<section class="sec specials">
    <div class="sec-inner">
        <header class="sec-hd">
            <h2 class="sec-tit">{{site.data.features.specials.title}}</h2>
            <p class="sec-stit">{{site.data.features.specials.stitle}}</p>
        </header>
        <ul class="icon-list specials-list">
            {% for item in site.data.features.specials.items %}
            <li>
                <div class="icon-item"><span class="icon-wrap"><i class="fa {{item.logo}}" aria-hidden="true"></i></span><span class="label">{{item.name}}</span></div>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>

<section class="sec sec-style1 features">
    <div class="sec-inner">
        <header class="sec-hd">
            <h2 class="sec-tit">{{site.data.features.brands.items.length}}{{site.data.features.brands.title}}</h2>
            <p class="sec-stit">{{site.data.features.brands.stitle}}</p>
        </header>
        <div class="brands">
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
    </div>
</section>