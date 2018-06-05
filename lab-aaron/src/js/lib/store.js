import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import logger from '../middleware/logger';
import thunk from '../middleware/thunk';
import validateBudget from '../middleware/validate-budget';


const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    thunk,
    validateBudget,
  ),
);//the app expects the reducer

export default store;