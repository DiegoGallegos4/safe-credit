import moment from 'moment';
import * as types from '../actions/types';
import { initialState } from './initial_state.js';

const analysis = (state = initialState.analysis, action) => {
  switch(action.type) {
    case types.UPDATE_ANALYSIS_FORM:
      return {
        ...state,
        [action.form]:{
          ...state[action.form],
          [action.field]: action.value
        }
      }

    case types.UPDATE_ENTITY:
      return {
        ...state,
        entity: {
          ...action.entity,
          birth_date: moment(action.birth_date)
        }
      }

      case types.UPDATE_ANALYSIS:
      return {
        ...state,
        analysis: {
          ...action.analysis
        },
        results: {
          ...action.results
        }
      }

    case types.REQUEST_IN_PROGRESS:
      return {
        ...state,
        loading: true
      }

    case types.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case types.REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      }

    default:
      return state
  }
}

export default analysis;