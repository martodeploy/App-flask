from flask import render_template

def init_routes(app):
    @app.route('/')
    def index():  # type: ignore[unused-function]
        return render_template('index.html')
