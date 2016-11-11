{% if idx < 4 %}
<div class="swiper-slide mm-slide lazy-bg" style="background-image:url({{item.pic}})"></div>
{% else %}
<div class="swiper-slide mm-slide" style="background-image:url({{item.pic}})"></div>
{% endif %}