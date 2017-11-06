from flask import Blueprint, render_template

from app import db
from .models import Analysis
from .serializers import analysis_schema, analysis_many_schema


analysis = Blueprint('analysis', __name__, url_prefix='/analysis')


@analysis.route('/new')
def new():
    return render_template('analysis/analysis_form.html')


@analysis.route('/api/v1/analysis/<int:id>', methods=['GET', 'POST','PUT', 'DELETE'])
def api_entity(analysis_id):
    if request.method == 'GET':
        analysis = Analysis.query.all()
        results = analysis_many_schema.dump(analysis)
        return jsonify({'data': results})
