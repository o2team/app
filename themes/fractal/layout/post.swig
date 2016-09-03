{% extends '_layout.swig' %}

{% block page_class %}page-with-header{% endblock %}

{% block header %}
{% include '_partial/common/header.swig' %}
{% endblock %}

{% block main %}
{% set author = page.author|default({github_name:config.github.user, nick:config.author}) %}
{{ partial('_partial/post/main', {post:page, author: author}) }}
{% endblock %}

