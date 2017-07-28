{% extends '_layout.swig' %}

{% block page_class %}page-full page-meetings{% endblock %}

{% block main %}

    {% include '_partial/meetings/banner.swig' %}
    {% include '_partial/meetings/features.swig' %}

{% endblock %}

{% block footer %}
    {% parent %}
{% endblock %}

{% block pagejs %}

{% endblock%}
