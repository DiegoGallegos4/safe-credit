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

export const selectClass = (total) => {
    if (total <= 1) return 'danger';
    if (total <= 2) return 'warning';
    return 'success';
  }

export const veredict = (total) => {
  if (total <= 1) return 'Inviable';
  if (total <= 2) return 'Viable con Riesgo';
  return 'Viable';
}

export const calculateTotal = (analysis) => {
  return Math.round( (analysis.current_ratio + analysis.gross_margin + 
    analysis.net_margin + analysis.debt_level + analysis.financial_debt) * 100) / 100;
}

export const calculateDebtCapacity = (analysis) => {
  return Math.round(
    (analysis.total_assets - analysis.current_liability) * 
    (analysis.current_ratio + analysis.net_margin + analysis.debt_level) * 100) / 100;
}

