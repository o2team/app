{% extends '_layout.swig' %}

{% block page_class %}page-with-header{% endblock %}

{% block header %}
{% include '_partial/common/header.swig' %}
{% endblock %}

{% block main %}

<div class="container main">
{% for post in page.posts %}
{% if loop.index == 1 %}
    {{ partial('_partial/post/main', {post: post}) }}
{% else %}
    {{ partial('_partial/post/mini', {post: post}) }}
{% endif %}
{% endfor %}
</div>

{% endblock %}