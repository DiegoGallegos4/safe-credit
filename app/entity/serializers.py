from app import ma
from .models import Entity


class EntitySchema(ma.ModelSchema):
    class Meta:
        model = Entity

    surname = ma.String() 
    name = ma.String()
    phone = ma.String()
    citizenship = ma.String()
    marital_status = ma.String()
    country = ma.String()
    cellphone = ma.String()
    birth_date = ma.Date()
    address = ma.String()
    city = ma.String()
    id_number = ma.String()