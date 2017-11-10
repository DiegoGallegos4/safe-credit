import React, { Component } from 'react';
import bind from 'bind-decorator';
import moment from 'moment';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
// Redux
import * as actions from 'actions/entity';
import configureStore from './reducers/store';
// Views
import Results from './components/analysis/form/results';


const Card = props => 
  <div className="card">
    <div className="card-header">
      <div className="row">
        {props.header()}
      </div>
    </div>
    <div className="card-body">
      {props.children}
    </div>
  </div>

const AnalysisTable = props => 
  <table className="table text-center">
    <thead>
      <tr>
        <th>ID</th>
        <th>#</th>
        <th>Capacidad de Endeudamiento</th>
        <th>Recomendacion</th>
      </tr>
    </thead>
    {
      props.state.map((analysis, key) => 
        <tbody key={Math.random() * key}>
          <tr>
            <td>{analysis.id}</td>
            <td>{`Analisis: ${key + 1}`}</td>
            <td className=''>
              {props.calculateDebtCapacity(analysis)}
            </td>
            <td className=''>
              <span className={`badge badge-${props.selectClass(props.calculateTotal(analysis))}`}>
                {props.calculateTotal(analysis)}
              </span>
              <span> {props.veredict(props.calculateTotal(analysis))}</span>
            </td>
            <td className="text-center">
              <button className="badge badge-pill badge-dark" onClick={() => props.onClick(key)}>
                Ver
              </button>  
            </td>               
          </tr>
          { props.idx === key &&
            <tr key={Math.random() * key}>
              <td colSpan="4">
                <table className='table table-condensed'>
                  <thead>
                    <tr>
                      <th>Razon Corriente</th>
                      <th>Margen Bruto</th>
                      <th>Margen Neto</th>
                      <th>Nivel de Endeudamiento</th>
                      <th>Endeudamiento Financiero</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{analysis.current_ratio}</td>
                      <td>{analysis.gross_margin}</td>
                      <td>{analysis.net_margin}</td>
                      <td>{analysis.debt_level}</td>
                      <td>{analysis.financial_debt}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr> 
          }
        </tbody>
      )
    }
  </table>
  
const EntityTable = props =>   
  <table className='table condensed'>
    <tbody>
      <tr>
        <td>Identidad</td>
        <td>{props.state.id_number}</td>
      </tr>
      <tr>
        <td>Fecha de Nacimiento</td>
        <td>{moment(props.state.birth_date).format('DD/MMM/YYYY')}</td>
      </tr>
    </tbody>
  </table> 

class EntityView extends Component {
  state = { idx: null }

  componentDidMount(){
    const { actions } = this.props;
    actions.getEntity(entity_id);
  }

  selectClass(total){
    if (total <= 1) return 'danger';
    if (total <= 2) return 'warning';
    return 'success';
  }

  veredict(total){
    if (total <= 1) return 'Inviable';
    if (total <= 2) return 'Viable con Riesgo';
    return 'Viable';
  }

  calculateTotal(analysis){
    return Math.round( (analysis.current_ratio + analysis.gross_margin + 
      analysis.net_margin + analysis.debt_level + analysis.financial_debt) * 100) / 100;
  }

  calculateDebtCapacity(analysis){
    return Math.round(
      (analysis.total_assets - analysis.current_liability) * 
      (analysis.current_ratio + analysis.net_margin + analysis.debt_level) * 100) / 100;
  }
  
  renderMain(){
    const { entity: state } = this.props;
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card header={() => <div className="col-md-6">{`${state.entity.name} ${state.entity.surname}`}</div>}>
              <EntityTable state={state.entity}/>
            </Card>
          </div>
        </div>

        <div className="row" style={{marginTop: 50}}>
          <div className="col-md-12">
            <Card header={() => <div className="col-md-6">Analisis de Cliente</div>}>
              <AnalysisTable 
                state={state.entity.analysis || []}
                idx={this.state.idx}
                onClick={idx => this.setState({ idx })}
                selectClass={this.selectClass}
                calculateTotal={this.calculateTotal}
                calculateDebtCapacity={this.calculateDebtCapacity}
                veredict={this.veredict}
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }

  render(){
    const { entity: state } = this.props;
    return(
      <div>
        {
          !state.loading ? this.renderMain() : <div></div>
        }
      </div>
    )
  }
}

const store = configureStore();

EntityView = connect(
  state => ({ entity: state.entity }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(EntityView);

render(
  <Provider store={store}>
    <EntityView/>
  </Provider>,
  document.getElementById('root')
);
