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
    @app.errorhandler(Exception)
    def internal_server_error(error):
        code = 500
        if isinstance(error, HTTPException):
            code = error.code
        return jsonify(error=str(error)), code
