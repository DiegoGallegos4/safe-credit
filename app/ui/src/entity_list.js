import React, { Component } from 'react';
import bind from 'bind-decorator'
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
// Redux
import * as actions from 'actions/entity';
import configureStore from './reducers/store';

const MaritalStatus = {
  married: 'Casado',
  single: 'Soltero',
  other: 'Other'
}

class EntityList extends Component{
  componentDidMount(){
    const { actions } = this.props;
    actions.getEntities();
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
                  <div className="col-md-6">
                    Clientes
                  </div>
                  <div className="col-md-6 d-flex justify-content-end">
                    <a class="btn btn-success btn-sm" href="/analysis/new" role="button">
                      Analizar
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <table className='table table-hover'>
                  <thead className="">
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Estado Civil</th>
                      <th>Identidad</th>
                      <th># Analisis</th>
                      <th></th>
                   </tr>
                  </thead>
                  <tbody>
                  {
                    state.entities.map((entity, key) => 
                      <tr key={entity.id}>
                        <th>{key + 1}</th>
                        <td>{`${entity.name} ${entity.surname}`}</td>
                        <td>{`${MaritalStatus[entity.marital_status]}`}</td>
                        <td>{`${entity.id_number}`}</td>
                        <td>{`${entity.analysis.length}`}</td>
                        <td className="text-center">
                          <a className="badge badge-pill badge-dark" href={`/entity/${entity.id}`}>Ver</a>                  </td>
                      </tr>  
                    )
                  }
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

EntityList = connect(
  state => ({ entity: state.entity }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(EntityList);

render(
  <Provider store={store}>
    <EntityList/>
  </Provider>,
  document.getElementById('root')
);
