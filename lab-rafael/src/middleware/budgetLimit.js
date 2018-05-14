const budgetLimit = store => next => action => {
  if (action.type === 'EXPENSE_CREATE') {
    console.log(store.getState().category.categories);
    let categories = store.getState().category.categories;
    let expenses = store.getState().expense.expenses;

    let catExpenses = expenses.filter(expense => expense.categoryId === action.payload.categoryId);
    let categoryBudget = categories.find(category => category.id === action.payload.categoryId);


    let totalExpenses = catExpenses.reduce((acc, curr) => acc + parseInt(curr.price), 0);

    console.log('total expenses', totalExpenses);
    console.log('cat expenses', catExpenses);

    return next(action);
  } 
  return next(action);
}

export default budgetLimit;
