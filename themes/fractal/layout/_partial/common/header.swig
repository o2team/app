<div class="navbar navbar-inverse navbar-fixed-top header">
    <div class="container">
    <div class="navbar-header">
        <a href="{{url_for('index.html')}}" class="navbar-brand"><img class="logo" src="{{url_for('img/logo-nobg.png')}}" alt="{{config.title}}"/></a>
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse" id="navbar-main">
        <ul class="nav navbar-nav">
            {{ header_menu('main-nav') }}
        </ul>

    </div>
    </div>
</div>