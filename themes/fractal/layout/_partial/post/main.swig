<!-- Post -->
<article class="post" style="display:none">    
    <div class="post-content">
        {{ post.content}}
    </div>
</article>

<div id="slider" class="sl-slider-wrapper">

    <div class="sl-slider">
        
        <div class="sl-slide" data-orientation="horizontal" data-slice1-rotation="-45" data-slice2-rotation="-10" data-slice1-scale="1.5" data-slice2-scale="1">
            <div class="sl-slide-inner">
                <div class="ecard">
                    <div class="deco" data-icon=""><img src="{{post.logo}}" alt="凹凸有致"/></div>
                    <h2>{{post.shorttitle}}</h2>
                    <blockquote><div class="quote-inner">{{post.subtitle}}</div><cite class="cl-effect-circle"><a href="//aotu.io" target="_blank">{{post.copyright}}</a></cite></blockquote>
                </div>
                <div class="c-flex sl-back">
                    <a href="/" title="Back to up.aotu.io" class="sl-back-btn">
                        <svg class="sl-icon sl-icon-arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg>
                    </a>
                    <a href="//aotu.io" title="Back to aotu.io" class="sl-back-btn"><img src="{{url_for('img/logo-o2.png')}}" alt="aotu.io"/></a>
                </div>
            </div>
        </div>

        <div class="sl-slide" data-orientation="vertical" data-slice1-rotation="15" data-slice2-rotation="8" data-slice1-scale="1.5" data-slice2-scale="1">
            <div class="sl-slide-inner">
                <div id="album" class="album ani-fade">
                    <h2 class="album-hd">分享嘉宾</h2>
                    <div class="album-bd">
                        {% for slide in post.slides %}
                        {% if slide.author %}
                        <div class="album-grid">
                            <div class="album-grid-bd">
                                <div class="album-item">
                                    <img class="album-img" src="{{slide.avatar}}" alt="{{slide.author}}"/>                  
                                </div>
                                <div class="album-tit">
                                    <div class="album-tit-bd">
                                        <div class="album-tit-text">[&nbsp;{{slide.title}}&nbsp;]</div>
                                        <div class="album-author">{{slide.author}}&nbsp;&nbsp;<span class="album-comp">({{slide.company}})</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {% endif %}
                        {% endfor %}
                    </div>  
                </div> 
            </div>
        </div>

        {% for slide in post.slides %}
        <div class="sl-slide sl-slide-{{loop.index}} {{slide.xclass}}" 
            data-orientation="{{slide.orientation}}"
            data-slice1-rotation="{{slide.slice1.rotation}}"
            data-slice2-rotation="{{slide.slice2.rotation}}"
            data-slice1-scale="{{slide.slice1.scale}}"
            data-slice2-scale="{{slide.slice2.scale}}">
            <div class="sl-slide-inner">
                <div class="ecard">
                    {% if slide.ficon %}
                    <div class="deco" data-ficon="&{{slide.ficon}}"></div>
                    {% else %}
                    <div class="deco"><img src="{{slide.avatar}}" alt="{{slide.author}}"/></div>
                    {% endif %}
                    {% if slide.title %}
                    <h2>{{slide.title}}</h2>
                    {% endif %}
                    <blockquote><p>{{slide.desc}}</p><cite><i class="fa fa-long-arrow-right" aria-hidden="true"></i>{{slide.author}} <i class="fa fa-heart" aria-hidden="true"></i> with {{slide.company}}</cite></blockquote>
                </div>
            </div>
        </div>
        {% endfor %}

    </div><!-- /sl-slider -->
    
    <nav id="nav-arrows" class="nav-arrows">
        <span class="nav-arrow-prev">Previous</span>
        <span class="nav-arrow-next">Next</span>
    </nav>

    <nav id="nav-dots" class="nav-dots">
        <span class="nav-dot-current"></span>
        <span></span>
        {% for slide in post.slides %}
        <span></span>
        {% endfor %}
    </nav>

</div><!-- /slider-wrapper -->