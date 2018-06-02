import {
    EXPENSE_CREATE,
    EXPENSE_UPDATE,
    EXPENSE_DELETE
} from '../actions/expense-actions.js'

const initialState = {
    expenses: []
}

export default function expenseReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    let newState = {}
    let newExpenses = [];

    switch (action.type) {
        case EXPENSE_CREATE:
            let createdExpense = state.expenses.map(ele => {
                console.log('In create reducer')
                return ele;
            });
            newExpenses.push(action.data)
            return Object.assign(newState, {
                expenses: newExpenses
            });


        case EXPENSE_UPDATE:
            let newObject = {};
            let currentExpense = state.expenses.map(ele => {
                if (ele.id === action.data.id) {
                    ele.isEditing = !ele.isEditing;
                    ele.name = action.data.name;
                    ele.budget = action.data.budget;
                }
                return ele;
            })
            let newObj = Object.assign(newObject, state, { expenses: currentExpense });
            return newObj


        case EXPENSE_DELETE:
            console.log('inDelete')
            let currentCategories = state.expenses.filter(ele => {
                return ele.id !== action.id
            })
            return Object.assign(newState, state, { expenses: currentExpense });


        default: return state
    }
}
