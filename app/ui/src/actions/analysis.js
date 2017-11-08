import * as types from './types';

const ENTITY_URL = '/entity/api/v1/entities';
const ANALYSIS_URL = '/analysis/api/v1/analysis';

export const updateForm = (form, field, value) => ({
  type: types.UPDATE_ANALYSIS_FORM,
  form,
  field,
  value
});

const updateEntity = entity => ({
  type: types.UPDATE_ENTITY,
  entity
});

const updateAnalysis = (analysis, results) => ({
  type: types.UPDATE_ANALYSIS,
  analysis,
  results
});


const requestInProgress = () => ({
  type: types.REQUEST_IN_PROGRESS
});


const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS
});


const requestFailed = error => ({
  type: types.REQUEST_FAILED,
  error
});

const request = (url, options) => {
  return new Promise((resolve,reject) => {
    fetch(url,options)
    .then(response => {
      return new Promise((resolve, reject) => response.json()
        .then((json) => resolve({
          status: response.status,
          ok: response.ok,
          json,
        }))
        .catch(err => reject(err))
      );
    })
    .then(response => {
      if(response.ok){
        return resolve(response.json)
      }
      return reject(response.json)
    })
    .catch(err => {
      return reject({ err })
    })
  })
}



export const createOrReturnEntity = (cb = () => null, notify) => {
  return (dispatch, getState) => {
    const { analysis } = getState();
    dispatch(requestInProgress())
    return request(ENTITY_URL, {
        method: 'POST',
        body: JSON.stringify(analysis.entity),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        dispatch(requestSuccess())
        dispatch(updateEntity(data.data))
        cb();
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
        notify(msg, 'error');
        dispatch(requestFailed(msg));
      })
  }
}

export const createAnalysis = (cb = () => null, notify) => {
  return (dispatch, getState) => {
    const { analysis } = getState();
    dispatch(requestInProgress)
    return request(ANALYSIS_URL, {
        method: 'POST',
        body: JSON.stringify(analysis.analysis),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(data => {
        dispatch(requestSuccess())
        dispatch(updateAnalysis(data.analysis, data.results))
        cb();
      })
      .catch(err => {
        let msg = "";
        if (Object.prototype.toString.call(err.error) === '[object Object]') {
          msg = Object
            .keys(err.error)
            .reduce((p,c) => {
              p += err.error[c] + "\n";
              return p;
            },'');
        }
        else {
          msg = err.error;
        }
        notify(msg, 'error');
        dispatch(requestFailed(msg));
      })
  }
}
