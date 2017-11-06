from flask import Blueprint, render_template, request, jsonify, abort

from .models import Analysis
from .serializers import analysis_schema, analysis_many_schema


analysis = Blueprint('analysis', __name__, url_prefix='/analysis')


@analysis.route('/new')
def new():
    return render_template('analysis/analysis_form.html')


@analysis.route('/api/v1/analysis', defaults={"id": None}, methods=['GET', 'POST'])
@analysis.route('/api/v1/analysis/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def api_analysis(id):
    if request.method == 'GET':
        entity_id = request.args.get('entity_id')
        if entity_id:
            analysis = Analysis.query.filter_by(entity_id=entity_id).first()
            results = analysis_schema.dump(analysis)
            return jsonify({'data': results.data})
        else:
            analysis = Analysis.query.all()
            results = analysis_many_schema.dump(analysis)
            return jsonify({'data': results.data})
    elif request.method == 'POST':
        if not request.is_json:
            return abort(400, 'Content type must be application/json')
        else:
            data = request.get_json()
            analysis, errors = analysis_schema.load(data)
            if errors:
                return jsonify({'message': errors}), 400

            analysis.save()

            return jsonify({'data': analysis_schema(analysis).dump().data}), 201
