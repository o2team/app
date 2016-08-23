<article class="post" itemscope itemtype="http://schema.org/Article">
    <a href="{{ url_for(post.path) }}" itemprop="url" title="{{ post.title }}" class="post-main">
        <div class="post-cover" itemscope itemtype="http://schema.org/ImageObject">
            <img src="{{ post.cover }}" alt="{{ post.title }}" itemprop="contentUrl"/>
            <span class="post-ovl"></span>
        </div>
        <div class="post-info">
            <h3 class="post-tit" itemprop="name headline">{{ post.title }}</h3>
            <p class="post-desc" itemprop="about">{{ post.subtitle }}</p>
        </div>
    </a>
    <div class="post-acts grid-2cols">
        <div class="grid-col">
            <a class="btn btn-black post-btn" href="{{post.yylive}}" title="{{post.title}}">&xrarr;&nbsp;YY直播</a>
        </div>
        <div class="grid-col">
            <a class="btn btn-greyline post-btn" href="{{ url_for(post.path) }}" title="{{post.title}}">了解详情&nbsp;&xrarr;</a>
        </div>
    </div>
</article>