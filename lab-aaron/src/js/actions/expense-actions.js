export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export function expenseCreate(expenseObj) {
  return {
    type: EXPENSE_CREATE,
    expenseObj
  };
};

export function expenseUpdate(expenseObj) {
  return {
    type: EXPENSE_UPDATE, 
    expenseObj
  };
};

export function expenseDestroy(uuidv4) {
  return {
    type: EXPENSE_DELETE,
    id: uuidv4
  };
};