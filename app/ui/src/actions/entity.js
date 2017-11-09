import * as types from './types';
import { request, requestInProgress, requestSuccess, requestFailed } from './helpers.js';

const ENTITY_URL = '/entity/api/v1/entities';

const updateEntities = entities => ({
  type: types.UPDATE_ENTITIES,
  entities
});

const updateEntity = entity => ({
  type: types.UPDATE_ENTITY,
  entity
});


export const getEntities = () => {
  return (dispatch, getState) => {
    dispatch(requestInProgress())
    return request(ENTITY_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        dispatch(requestSuccess())
        dispatch(updateEntities(data.data))
      })
      .catch(err => {
        let msg = "";
        if (Object.prototype.toString.call(err.error) === '[object Object]') {
          msg = Object
            .keys(err.error)
            .reduce((p,c) => {
              p += `${c}: ${err.error[c]}\n`;
              return p;
            },'');
        }
        else {
          msg = err.error;
        }
        dispatch(requestFailed(msg));
      })
  }
}

export const getEntity = id => {
  return dispatch => {
    dispatch(requestInProgress())
    return request(`${ENTITY_URL}/${id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        dispatch(requestSuccess())
        dispatch(updateEntity(data.data))
      })
      .catch(err => {
        let msg = "";
        if (Object.prototype.toString.call(err.error) === '[object Object]') {
          msg = Object
            .keys(err.error)
            .reduce((p,c) => {
              p += `${c}: ${err.error[c]}\n`;
              return p;
            },'');
        }
        else {
          msg = err.error;
        }
        dispatch(requestFailed(msg));
      })
  }
}
