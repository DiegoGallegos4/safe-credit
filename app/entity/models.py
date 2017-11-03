from app import db


class Entity(db.Model):
    surname = db.Column(db.String)
    name = db.Column(db.String)
    phone = db.Column(db.String)
    citizenship = db.Column(db.String)
    marital_status = db.Column(db.String)
    country = db.Column(db.String)
    cellphone = db.Column(db.String)
    birth_date = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())
    address = db.Column(db.String)
    city = db.Column(db.String)
    id_number = db.Column(db.String)
