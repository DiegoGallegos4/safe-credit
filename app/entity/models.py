from app import db
from .enums import Country, MaritalStatus


class Entity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    surname = db.Column(db.String(80), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20))
    citizenship = db.Column(db.String(30), nullable=False)
    marital_status = db.Column(db.Enum(MaritalStatus), nullable=False)
    country = db.Column(db.Enum(Country), nullable=False)
    cellphone = db.Column(db.String(30))
    birth_date = db.Column(db.Date, nullable=False, default=db.func.current_timestamp())
    id_number = db.Column(db.String(80))
    address = db.Column(db.String(100))
    analysis = db.relationship('Analysis', backref='entity', lazy=True)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
