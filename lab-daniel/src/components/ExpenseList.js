import React from 'react';
import { connect } from 'react-redux';
import { expenseCreate, expenseUpdate, expenseDelete } from '../actions/expense-actions.js'

import ExpenseItem from './ExpenseItem';

class ExpenseList extends React.Component {
    constructor(props) {
        super(props);

        this.expList = this.expList.bind(this);
    }
    
    expList() {
        return this.props.expenses.expenses.map((expense) => {
            return (
                <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.name}
                price={expense.price}
                expenseUpdate={this.props.expenseUpdate} >
                </ExpenseItem>
            )
        });

    }

    render() {
        return (
            <div id="expense-header">
                <ul>
                {this.expList()}
                </ul>
            </div>

        )
    }
}


const mapStateToProps = state => ({
    cagetories: state.cagetories,
    expenses: state.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        expenseCreate: (data) => dispatch(expenseCreate(data)),
        expenseUpdate: (data) => dispatch(expenseUpdate(data)),
        expenseDelete: (data) => dispatch(expenseDelete(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);