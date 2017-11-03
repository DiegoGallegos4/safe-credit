from app import db


class Analysis(db.Model):
    current_asset = db.Column(db.Float)
    passive_liability = db.Column(db.Float)
    total_assets = db.Column(db.Float)
    passive_third_party = db.Column(db.Float)
    financial_obligations = db.Column(db.Float)
    net_sales = db.Column(db.Float)
    gross_margin = db.Column(db.Float)
    net_margin = db.Column(db.Float)
