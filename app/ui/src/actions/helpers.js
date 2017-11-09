import * as types from './types';

export const requestInProgress = () => ({
  type: types.REQUEST_IN_PROGRESS
});


export const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS
});


export const requestFailed = error => ({
  type: types.REQUEST_FAILED,
  error
});


export const request = (url, options) => {
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