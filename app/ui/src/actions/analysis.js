import * as types from './types';

export const updateAnalysisForm = (form, field, value) => ({
  type: types.UPDATE_ANALYSIS_FORM,
  form,
  field,
  value
});

