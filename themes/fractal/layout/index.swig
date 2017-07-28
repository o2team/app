{% extends '_layout_index.swig' %}

{% block page_class %}page-full page-index{% endblock %}

{% block main %}

    {% include '_partial/index/main.swig' %}

{% endblock %}
{% block footer %}
    {% parent %}
{% endblock %}

