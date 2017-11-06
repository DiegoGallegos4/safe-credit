from app import ma
from .models import Entity


class EntitySchema(ma.ModelSchema):

    class Meta:
        model = Entity

    surname = ma.String(required=True)
    name = ma.String(required=True)
    phone = ma.String()
    citizenship = ma.String()
    marital_status = ma.String(required=True)
    country = ma.String(required=True)
    cellphone = ma.String()
    birth_date = ma.Date(required=True)
    address = ma.String()
    city = ma.String()
    id_number = ma.String(required=True)


entity_schema = EntitySchema()
entities_schema = EntitySchema(many=True)
