import {
  EXPENSE_CREATE,//advantage of importing these actions into the middleware
                 //allows to change the string value in the expense-actions.js file
                 //to whatever you wanted IN ONLY ONE PLACE INSTEAD OF MULTIPLE PLACES
  EXPENSE_UPDATE,
} from '../actions/expense-actions';

//compares price property (the budget) to the listed expenses prices to make sure the
//budget is not exceeded



const validateBudget = store => next => action => {
  const isCreate = action.type && action.type === EXPENSE_CREATE; //compares to the import above
  const isUpdate = action.type && action.type === EXPENSE_UPDATE;
  if (isCreate || isUpdate) {
    const categoryID = action.expenseObj.categoryID;//category id from the action
    const foundCategoryObject = store.getState().categoryReducer.categoriesList.find(listItem => {
      return listItem.id === categoryID;
    });//category object from the state that has a matching id to the category id from the action
    
    let accumulatedExpenses = 0;
    
    store.getState().expenseReducer.expensesList.forEach(expenseItem => {
      //iterate through all expenses in state
      if (expenseItem.categoryID === categoryID) {//compare expense object category id to
                                                  //the action category id
        if (isCreate || isUpdate && expenseItem.id !== action.expenseObj.id) {
        const itemPrice = parseInt(expenseItem.price);
        accumulatedExpenses += itemPrice;
        }
      }
    })
    accumulatedExpenses += parseInt(action.expenseObj.price);//add action expense object price to 
                                                            //the accumulatedExpenses
    console.log('accumulatedExpenses: ', accumulatedExpenses);
    try {
      if (accumulatedExpenses > parseInt(foundCategoryObject.price)) {
        throw new Error('EXPENSES CANNOT EXCEED CATEGORY PRICE');
      } else {
        return next(action);
      }
    } catch (error) {
      console.error('Error: ', error);
      return store.getState();
    }
  } else {
    return next(action);
  }
};

export default validateBudget;