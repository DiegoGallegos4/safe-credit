from app import ma
from .models import Analysis


class AnalysisSchema(ma.ModelSchema):

    class Meta:
        model = Analysis

    current_asset = ma.Float()
    passive_liability = ma.Float()
    total_assets = ma.Float()
    passive_third_party = ma.Float()
    financial_obligations = ma.Float()
    net_sales = ma.Float()
    gross_margin = ma.Float()
    net_margin = ma.Float()
