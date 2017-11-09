import moment from 'moment';
import * as types from '../actions/types';
import { initialState } from './initial_state.js';

const entity = (state = initialState.entity, action) => {
  switch(action.type) {
    case types.UPDATE_ENTITIES:
      return {
        ...state,
        entities: action.entities
      }

    case types.UPDATE_ENTITY:
      return {
        ...state,
        entity: action.entity
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

export default entity;