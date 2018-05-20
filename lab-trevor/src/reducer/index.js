import {combineReducers} from 'redux';
import counterReducer from './budget-app';
import expenseReducer from './expense-app';

export default combineReducers({
 counterReducer,
 expenseReducer
})