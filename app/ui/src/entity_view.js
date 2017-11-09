import React, { Component } from 'react';
import bind from 'bind-decorator';
import moment from 'moment';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
// Redux
import * as actions from 'actions/entity';
import configureStore from './reducers/store';


class EntityView extends Component{
  componentDidMount(){
    const { actions } = this.props;
    actions.getEntity(entity_id);
  }

  render(){
    const { entity: state } = this.props;
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6">{`${state.entity.name} ${state.entity.surname}`}</div>
                </div>
              </div>
              <div className="card-body">
                <table className='table table-hover'>
                  <tbody>
                    <tr>
                      <td>Identidad</td>
                      <td>{state.entity.id_number}</td>
                    </tr>
                    <tr>
                      <td>Fecha de Nacimiento</td>
                      <td>{moment(state.entity.birth_date).format('DD/MMM/YYYY')}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
