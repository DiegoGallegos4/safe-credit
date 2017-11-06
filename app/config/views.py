from flask import Blueprint, render_template, jsonify
from werkzeug.exceptions import HTTPException

main = Blueprint('main', __name__, url_prefix='/')


@main.route('api/health')
def health():
    response = {
        "message": "ok"
    }
    return jsonify(response)


@main.route('')
def home():
    return render_template('home.html')


def set_error_handler(app):
    def handle_error(error):
        code = 500
        if isinstance(error, HTTPException):
            code = error.code
        return jsonify(error=str(error)), code

    for cls in HTTPException.__subclasses__():
        app.register_error_handler(cls, handle_error)
    app.register_error_handler(Exception, handle_error)
