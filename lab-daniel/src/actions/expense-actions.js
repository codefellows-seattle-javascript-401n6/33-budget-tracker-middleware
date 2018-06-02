export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export function expenseCreate(data) {
    return {type: EXPENSE_CREATE, data}
}

export function expenseUpdate(data) {
    return {type: EXPENSE_UPDATE, data}
}

export function expenseDelete(data) {
    return {type: EXPENSE_DELETE, data}
}


