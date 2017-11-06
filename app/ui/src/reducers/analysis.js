import * as types from '../actions/types';
import { initialState } from './initial_state.js';

const analysis = (state = initialState.analysis, action) => {
  switch(action.type) {
    case types.UPDATE_ANALYSIS_FORM:
      return {
        ...state,
        [action.form]:{
          ...state[form],
          [field]: value
        }
      }
    default:
      return state
  }
}

export default analysis;