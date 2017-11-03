from flask import Flask
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from app.config.views import (set_error_handler, main)

db = SQLAlchemy()
ma = Marshmallow()
migrate = Migrate()


def create_app(config=None):
    app = Flask(__name__)
    if config:
        app.config.from_object(config)
    else:
        app.config.from_object('config.Development')

    # init dependencies
    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app)

    # set error handlers
    set_error_handler(app)

    # register blueprints
    app.register_blueprint(main)
    return app
