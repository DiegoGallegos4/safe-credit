from app import db
from .enums import AnalysisStatus


class Analysis(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    current_asset = db.Column(db.Float)
    current_liability = db.Column(db.Float)
    total_assets = db.Column(db.Float)
    third_party_liability = db.Column(db.Float)
    financial_obligations = db.Column(db.Float)
    net_sales = db.Column(db.Float)
    gross_utility = db.Column(db.Float)
    net_utility = db.Column(db.Float)
    status = db.Column(db.Enum(AnalysisStatus), nullable=False)
    entity_id = db.Column(db.Integer, db.ForeignKey('entity.id'), nullable=False)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
