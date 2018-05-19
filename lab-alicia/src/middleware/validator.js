const validator = store => next => action => {
  if (action.type === 'CATEGORY_CREATE') {
    if (parseInt(action.value.budget) <= 0) {
      console.log('budget', action.value.budget);
      throw new Error('VALIDATION ERROR: budget must be more than $0');
    }

    if (action.value.name === '') {
      throw new Error('VALIDATION ERROR: please enter a name');
      throw new Error('VALIDATION ERROR: budget must be more than $0');
    }
  }

  if (action.type === 'EXPENSE_CREATE') {
    if (action.value.name === '') {
      throw new Error('VALIDATION ERROR: please enter a name');
    }

    let categoryId = action.value.categoryId;
    let expenseAmount = parseInt(action.value.amount);
    let currentState = Object.assign({}, store.getState());
    let category = currentState.categories.categories.find(category => {
      
      return category.id === categoryId;
    });
    let maxAmount = parseInt(category.budget);
    if (expenseAmount > maxAmount) {
      throw new Error('Validation Error: please enter an amount less than the budget.');
    }
  }

  if (action.type === 'CATEGORY_UPDATE') {
    if (action.values.isEditing === false) {
      if (action.values.name === '') {
        throw new Error('VALIDATION ERROR: please enter a name');
      }

      if (parseInt(action.values.budget) <= 0) {
        throw new Error('VALIDATION ERROR: budget must be more than $0');
      }
    }
  }

  if (action.type === 'EXPENSE_UPDATE') {
    if (action.values.isEditing === false) {
      let categoryId = action.value.categoryId;
      let expenseAmount = parseInt(action.values.amount);
      let currentState = Object.assign({}, store.getState());
      let category = currentState.categories.categories.find(category => {
        return category.id === categoryId;
      });
      let maxAmount = parseInt(category.budget);

      if (expenseAmount > maxAmount) {
        throw new Error('Validation Error: please enter an amount less than the budget.');
      }
    }
  }

  let result = next(action);
  return result;
};
//   const isCategory = action.type && action.type.startsWith('CATEGORY');

//   if (isCategory) {
//     try {
//       const category = action.payload;
//       const notValid = !category.name || !category.budget;
//       if (notValid) {
//         throw new Error('VALIDATION ERROR: Category must include title and amount');
//       } else {
//         return next(action);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   } else {
//     return next(action);
//   }
// };

export default validator;