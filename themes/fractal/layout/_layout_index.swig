<!DOCTYPE html>
<html class="ovf-hidden theme-{{config.theme}}">
<head>
    <meta charset="utf-8"/>
    <title>{% block title %}{% if page.title %}{{ page.title }} | {% endif %}{{ config.title }}「{{ config.subtitle }}」{% endblock %}</title>
    {% block prehead %} {% endblock %}
    {{partial('_partial/index/head')}}
    {% block head %} {% endblock %}
</head>
<body class="{% block page_class %}{% endblock %}">
<div class="wx_cover" style="display:none;width:1px;height:1px;overflow:hidden">
    <img src="{{url_for(page.wxcover | default('img/logo-sq500.jpg'))}}" alt="LiteO2"/>
</div>
    {% block prebody %}{% endblock %}

    {% block header %}{% endblock %}

    {% block main %}{% endblock %}

    {% block footer %}
        {% include '_partial/index/footer.swig' %}
    {% endblock %}

    {% block pagejs %}{% endblock %}

    {% block after_footer %}
        {% include '_partial/common/after_footer.swig' %}
    {% endblock %}

</body>
</html>
