import React, { Component } from 'react';
import bind from 'bind-decorator'
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Notifications, {notify} from 'react-notify-toast';
// Redux
import * as actions from 'actions/analysis';
import configureStore from './reducers/store';
// Components
import Intro from './components/analysis/form/intro';
import PersonalInfo from './components/analysis/form/personal-info';
import BalanceSheet from './components/analysis/form/balance-sheet';
import ProfitNLoss from './components/analysis/form/profit-n-loss';
import Results from './components/analysis/form/results';
//Others
import { countries, marital_status } from './common/options';


class AnalysisForm extends Component{
  state = {
    page: 1,
    options: {
      countries: Object
        .keys(countries)
        .map(country => ({
          value: country, 
          label: countries[country]
        })),
      marital_status: Object
        .keys(marital_status)
        .map(status => ({
          value: status,
          label: marital_status[status]
        }))
    }
  }
  
  @bind
  nextPage(){
    this.setState({
      page: this.state.page + 1 
    })
  }

  @bind
  previousPage(){
    this.setState({
      page: this.state.page - 1 
    })
  }

  @bind
  exit(){
    window.location.href = '/entity'
  }

  @bind
  handleSubmitEntity(){
    const { actions } = this.props;
    const { entity : state } = this.props.analysis;
    if (state.id) this.nextPage(); 
    else actions.createOrReturnEntity(this.nextPage, notify.show);
  }

  @bind
  handleSubmitAnalysis(){
    const { actions } = this.props;
    const { analysis : state} = this.props.analysis;
    if (state.id) this.nextPage(); 
    else actions.createAnalysis(this.nextPage, notify.show);
  }

  render(){
    const { page, options } = this.state;
    const { actions, analysis : state } = this.props;
    return (
      <div>
        <Notifications options={{zIndex: 5000}}/>
        <ul className='nav nav-tabs'>
          <li className="nav-item">
            <a href="#" className={`nav-link ${page == 1 && 'active'}`}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${page == 2 && 'active'}`}>Datos Personales</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${page == 3 && 'active'}`}>Balance General</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${page == 4 && 'active'}`}>Ganancia y Perdidas</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${page == 5 && 'active'}`}>Resultados</a>
          </li>
        </ul>
        <div className="container tab-content" style={{marginTop: 60, marginBottom: 30}}>
          <div className="row">
            { page === 1  && 
              <Intro 
                onChange={actions.updateForm}
                nextPage={this.nextPage}
              />
            }
            { page === 2 &&
              <PersonalInfo
                options={options}
                onChange={actions.updateForm}
                form={state.entity}
                nextPage={this.handleSubmitEntity}
                previousPage={this.previousPage}
                error={state.error}
              />
            }
            { page === 3 &&
              <BalanceSheet
                onChange={actions.updateForm}
                form={state.analysis}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
              />
            }
            { page === 4 &&
              <ProfitNLoss
                onChange={actions.updateForm}
                form={state.analysis}
                nextPage={this.handleSubmitAnalysis}
                previousPage={this.previousPage}
              />
            }
            { page === 5 && 
              <Results
                results={state.results}
                previousPage={this.previousPage}
                exit={this.exit}
              />
            }
          </div>
        </div>
      </div>
    )
  }
}

const store = configureStore();

AnalysisForm = connect(
  state => ({ analysis: state.analysis }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(AnalysisForm);

render(
  <Provider store={store}>
    <AnalysisForm/>
  </Provider>,
  document.getElementById('root')
);

