from marshmallow_enum import EnumField

from app import ma
from app.analysis.serializers import AnalysisSchema
from .enums import MaritalStatus, Country
from .models import Entity


class EntitySchema(ma.ModelSchema):

    class Meta:
        model = Entity

    surname = ma.String(required=True)
    name = ma.String(required=True)
    phone = ma.String()
    citizenship = ma.String()
    marital_status = EnumField(MaritalStatus)
    country = EnumField(Country)
    cellphone = ma.String()
    birth_date = ma.Date(required=True)
    address = ma.String()
    city = ma.String()
    analysis = ma.Nested(AnalysisSchema, many=True)
    id_number = ma.String(required=True)
    


entity_schema = EntitySchema()
entities_schema = EntitySchema(many=True)
