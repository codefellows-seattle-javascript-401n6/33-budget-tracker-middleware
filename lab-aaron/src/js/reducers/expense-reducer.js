import {
  EXPENSE_CREATE,
  EXPENSE_UPDATE,
  EXPENSE_DELETE
} from '../actions/expense-actions';
import uuidv4 from 'uuid/v4';

const initialReducerState = {
  expensesList: []
};

function expenseReducer(state, action) {
console.log('EPXENSE REDUCER');
  if (state === undefined) {
    console.log('ping EXPENSE initialState');
    return initialReducerState;
  };

  let newState = {};
  let newList = [];
  let currentExpenses;

  switch(action.type) {
    case EXPENSE_CREATE:
      console.log('EXPENSE_CREATE ACTION');
      newList = state.expensesList.map(array => {
        return array;
      });
      console.log('newList: ', newList);
      const addedPropsObj = {
      ...action.expenseObj,
      timestamp: new Date(),
      id: uuidv4(),
    };
    newList.push(addedPropsObj);
    console.log('newList after .push(): ', newList);
    return Object.assign(newState, {
      expensesList: newList
    });

    case EXPENSE_UPDATE:
      currentExpenses = state.expensesList.map(element => {
        console.log('EXPENSE UPDATE ACTION');
        if(element.id === action.expenseObj.id) {
          return Object.assign({}, element, action.expenseObj);
        } else {
          return element;
        };
      });
      return Object.assign(newState, state, {expensesList: currentExpenses});

    case EXPENSE_DELETE:
      currentExpenses = state.expensesList.filter(element => {
        console.log('EXPENSE DELETE ACTIION ID: ', action.id);
        console.log('EXPENSE ITEM ID: ', element.id);
        return element.id !== action.id;
      });
      return Object.assign(newState, state, { expensesList: currentExpenses});

    default:import {
      EXPENSE_CREATE,
      EXPENSE_UPDATE,
      EXPENSE_DELETE
    } from '../actions/expense-actions';
      return state;
  };
};

export default expenseReducer;