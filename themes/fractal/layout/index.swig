{% extends '_layout.swig' %}

{% block page_class %}page-full page-index{% endblock %}

{% block main %}

    {% include '_partial/index/banner.swig' %}
    
{% endblock %}

{% block footer %}
    {% parent %}
{% endblock %}

{% block pagejs %}
{{ js('js/index') }}
{% endblock%}