from app import ma
from .models import Analysis


class AnalysisSchema(ma.ModelSchema):

    class Meta:
        model = Analysis

    current_asset = ma.Float(required=True)
    passive_liability = ma.Float(required=True)
    total_assets = ma.Float(required=True)
    passive_third_party = ma.Float(required=True)
    financial_obligations = ma.Float(required=True)
    net_sales = ma.Float(required=True)
    gross_margin = ma.Float(required=True)
    net_margin = ma.Float(required=True)

analysis_schema = AnalysisSchema()
analysis_many_schema = AnalysisSchema(many=True)
