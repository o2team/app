{% extends '_layout.swig' %}

{% block page_class %}page-full page-index{% endblock %}

{% block main %}

    {% include '_partial/qingy/banner.swig' %}
    {% include '_partial/qingy/features.swig' %}

{% endblock %}

{% block footer %}
    {% parent %}
{% endblock %}

{% block pagejs %}
{{ js('js/qingy') }}
{% endblock%}
