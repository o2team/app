{% extends '_index_layout.swig' %}

{% block page_class %}page-full page-index{% endblock %}

{% block main %}

    {% include '_partial/index/main.swig' %}

{% endblock %}
{% block footer %}
    {% parent %}
{% endblock %}
{% block pagejs %}
  {{ js('js/index') }}
  {{ js('js/functions-min') }}
{% endblock%}
