from marshmallow_enum import EnumField

from app import ma
from .enums import AnalysisStatus
from .models import Analysis


class AnalysisSchema(ma.ModelSchema):

    class Meta:
        model = Analysis

    current_asset = ma.Float(required=True)
    current_liability = ma.Float(required=True)
    total_assets = ma.Float(required=True)
    third_party_liability = ma.Float(required=True)
    financial_obligations = ma.Float(required=True)
    net_sales = ma.Float(required=True)
    gross_utility = ma.Float(required=True)
    net_utility = ma.Float(required=True)
    status = EnumField(AnalysisStatus)
    entity_id = ma.Integer(required=True)

    # calculated fields
    current_ratio = ma.Method('get_current_ratio')
    net_work_capital = ma.Method('get_net_work_capital')
    gross_margin = ma.Method('get_gross_margin')
    net_margin = ma.Method('get_net_margin')
    debt_level = ma.Method('get_debt_level')
    financial_debt = ma.Method('get_financial_debt')

    def get_current_ratio(self, obj):
        current_ratio = obj.current_asset / obj.current_liability
        return round(current_ratio * 0.25, 2)

    def get_net_work_capital(self, obj):
        net_work_capital = obj.current_asset - obj.current_liability
        return round(net_work_capital, 2)

    def get_gross_margin(self, obj):
        gross_margin = obj.gross_utility / obj.net_sales
        return round(gross_margin * 0.25, 2)

    def get_net_margin(self, obj):
        net_margin = obj.net_utility / obj.net_sales
        return round(net_margin * 0.10, 2)

    def get_debt_level(self, obj):
        debt_level = obj.third_party_liability / obj.total_assets
        return round(debt_level * 0.30, 2)

    def get_financial_debt(self, obj):
        financial_debt = obj.financial_obligations / obj.net_sales
        return round(financial_debt * 0.10, 2)

analysis_schema = AnalysisSchema()
analysis_many_schema = AnalysisSchema(many=True)
