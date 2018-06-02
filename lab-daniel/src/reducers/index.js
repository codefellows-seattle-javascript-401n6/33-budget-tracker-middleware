import { combineReducers } from 'redux';

import categoryReducer from './category-reducer';
import expenseReducer from './expense-reducer';

export default combineReducers({
  categories: categoryReducer,
  expenses: expenseReducer
});