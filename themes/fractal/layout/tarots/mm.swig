{% extends '../_layout.swig' %}

{% block title %}
  {% set page_title_suffix = ' | ' + config.title %}
  {% if page.type === "cates" %}
    {{ __('menu.cates') + page_title_suffix }}
  {% elif page.type === "tags" %}
    {{ __('menu.tags') + page_title_suffix }}
  {% else %}
    {{ page.title + page_title_suffix }}
  {% endif %}
{% endblock %}

{% block head %}
<link rel="stylesheet" type="text/css" href="{{url_for('assets/swiper/css/swiper.min.css')}}"/>
{{ css('css/tarot') }}
<script src="{{url_for('assets/swiper/js/swiper.min.js')}}"></script>
{% endblock %}

{% block main %}
<div class="tarot">
  <div class="tarot-hd">
    「执念卡」- 色即是空
  </div>
  <div class="tarot-bd">
    <div class="swiper-container mm-swiper" id="swiper">
      <div class="swiper-wrapper mm-swiper-wrapper">
        {% for item in _.sortBy(site.data[page.data], 'name') %}
              {{ partial('_item', {item: item}) }}
        {% endfor %}
      </div>
    </div>
  </div>
</div>

{% endblock %}


{% block pagejs %}
<script>
App.$win.on('siteLoaded', function() {
  var swiper = new Swiper('#swiper', {
      pagination: false,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
      }
  });
});
</script>
{% endblock %}

{% block footer %}
  {% include '../_partial/common/footer-lite.swig' %}
{% endblock %}