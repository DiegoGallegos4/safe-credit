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
            data["status"] = 'pending'

            analysis, errors = analysis_schema.load(data)
            if errors:
                return jsonify({'error': errors}), 400

            analysis.save()

            # Liquity Indicators
            current_ratio = analysis.current_asset / analysis.current_liability
            net_work_capital = analysis.current_asset - analysis.current_liability
            # Profitability Indicators
            gross_margin = analysis.gross_utility / analysis.net_sales
            net_margin = analysis.net_utility / analysis.net_sales
            # Debt Indicators
            debt_level = analysis.third_party_liability / analysis.total_assets
            financial_debt = analysis.financial_obligations / analysis.net_sales

            results = {
                "current_ratio": round(current_ratio * 0.25, 2),
                "net_work_capital": round(net_work_capital, 2),
                "gross_margin": round(gross_margin * 0.25, 2),
                "net_margin": round(net_margin * 0.10, 2),
                "debt_level": round(debt_level * 0.30, 2),
                "financial_debt": round(financial_debt * 0.10, 2)
            }

            results['total'] = round(results["current_ratio"] + results["gross_margin"] +
                                     results["net_margin"] +
                                     results["debt_level"] +
                                     results["financial_debt"], 2)

            return jsonify({
                'data': analysis_schema.dump(analysis).data,
                'results': results
            }), 201
