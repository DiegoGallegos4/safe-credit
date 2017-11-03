import os


class BaseConfig():
    DEBUG = False
    SECRET_KEY = ''
    SQLALCHEMY_DATABASE_URI = 'postgresql://dev:dev@localhost:5432/safe_credit' or os.getenv(
        'DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class Test(BaseConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://dev:dev@localhost:5432/safe_credit_test'


class Development(BaseConfig):
    DEBUG = True


class Production(BaseConfig):
    DEBUG = False
