import React, { Component } from 'react';
import bind from 'bind-decorator'
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
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

  }

  @bind
  handleSubmit(values){
    console.log(values);
  }

  render(){
    const { page } = this.state;
    const { actions, analysis : state } = this.props;
    return (
      <div>
        { page === 1  && 
          <Intro 
            onChange={actions.updateForm}
            nextPage={this.nextPage}
          />
        }
        { page === 2 &&
          <PersonalInfo
            onChange={action.updateForm}
            form={state.entity}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
          />
        }
        { page === 3 &&
          <BalanceSheet
            onChange={action.updateForm}
            form={state.analysis}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
          />
        }
        { page === 4 &&
          <ProfitNLoss
            onChange={action.updateForm}
            form={state.analysis}
            nextPage={this.nextPage}
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

