import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import analysis from './analysis';


const rootReducer = combineReducers({
  analysis
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      createLogger({collapse: true})
    )
  );

  return store
};

export default configureStore;

