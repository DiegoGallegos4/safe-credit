from flask import Flask
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

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
    migrate.init_app(app, db)

    # set error handlers
    from app.config.views import (set_error_handler, main)

    set_error_handler(app)

    # register blueprints
    from app.analysis.views import analysis as analysis_module
    from app.entity.views import entity as entity_module

    app.register_blueprint(main)
    app.register_blueprint(analysis_module)
    app.register_blueprint(entity_module)

    return app
