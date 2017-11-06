from flask import abort, Blueprint, jsonify, render_template, request

from .models import Entity
from .serializers import entity_schema, entities_schema

entity = Blueprint('entity', __name__, url_prefix='/entity')


@entity.route('/api/v1/entities', defaults={'id': None}, methods=['GET', 'POST'])
@entity.route('/api/v1/entities/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def api_entity(id):
    if request.method == 'GET':
        if id:
            entity = Entity.query.filter_by(id=id).first()
            if not entity:
                abort(404, 'Record not found with provided id')
            result = entity_schema.dump(entity)
            return jsonify({'data': result.data})
        entities = Entity.query.all()
        results = entities_schema.dump(entities)
        return jsonify({'data': results.data})
    elif request.method == 'POST':
        if not request.is_json:
            return abort(400, 'Content type must be application/json')
        else:
            data = request.get_json()
            entity, errors = entity_schema.load(data)
            if errors:
                return jsonify({'message': errors}), 400

            entity.save()

            return jsonify({'data': entity_schema.dump(entity).data}), 201
    elif request.method == 'PUT':
        pass
    elif request.method == 'DELETE':
        pass


@entity.route('/')
def index():
    return render_template('entity/index.html')


@entity.route('/new')
def new():
    return "Hello"


@entity.route('/edit')
def edit():
    return "Hello"
