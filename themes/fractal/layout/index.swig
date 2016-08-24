{% extends '_layout.swig' %}

{% block page_class %}page-full page-index{% endblock %}

{% block main %}

    {% include '_partial/index/banner.swig' %}
    {% include '_partial/index/features.swig' %}
    
{% endblock %}

{% block footer %}
    {% parent %}
{% endblock %}

{% block pagejs %}
{{ js('js/index') }}
{% endblock%}