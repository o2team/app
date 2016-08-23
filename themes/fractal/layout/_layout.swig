<!DOCTYPE html>
<html class="ovf-hidden theme-{{config.theme}}">
<head>
    <meta charset="utf-8"/>
    <title>{% block title %}{% if page.title %}{{ page.title }} | {% endif %}{{ config.title }}「{{ config.subtitle }}」{% endblock %}</title>
    {{partial('_partial/common/head')}}
</head>
<body class="{% block page_class %}{% endblock %}">
    {% block prebody %}{% endblock %}

    {% block header %}{% endblock %}

	{% block main %}{% endblock %}

    {% block footer %}
        {% include '_partial/common/footer.swig' %}
    {% endblock %}

    {% block pagejs %}{% endblock %}

    {% block after_footer %}
        {% include '_partial/common/after_footer.swig' %}
    {% endblock %}
    
</body>
</html>
