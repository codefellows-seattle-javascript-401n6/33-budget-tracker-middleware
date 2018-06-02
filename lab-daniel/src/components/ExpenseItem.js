import React from 'react';
import { connect } from 'react-redux';
import { expenseCreate, expenseUpdate, expenseDelete } from '../actions/expense-actions.js'

import ExpenseForm from './ExpenseForm'

class ExpenseItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }
    handleRemove(e) {
        e.preventDefault();
        let id = this.props.id;
        this.props.expenseDelete(id);
    }

    toggleEdit(e) {
        this.setState({ isEditing: !this.state.isEditing });
    }

    cancelEdit(e) {
        e.preventDefault();
        this.setState({ isEditing: false });
    }

    handleEdit(e) {
        e.preventDefault();
        this.toggleEdit();
    }
render() {
    if (this.state.isEditing != false) {
        return (
            <div className="handleEdit" onSubmit={this.handleEdit}>
                <ExpenseForm name="edit" expense={this.props.expense}></ExpenseForm>
                <button id="close-edit" onClick={this.cancelEdit}>CLOSE EDIT</button>
            </div>
        )
    }
    else {
        return (
            <form className="expenses-section">
                <h3>Name: {this.props.name}</h3>
                <h3>cost: {this.props.price}</h3>
                <div id="expense-buttons">
                    <button className="remove" name='destroy' onClick={this.handleRemove}>Remove</button>
                    <button className="edit" onClick={this.handleEdit}>Edit</button>
                </div>
            </form>
        )
    }
}
}


const mapStateToProps = state => ({
    categories: state.categories,
    expenses: state.expenses
});

const mapDispatchToProps = (dispatch, getState) => {
    return {
        expenseCreate: (data) => dispatch(expenseCreate(data)),
        expenseUpdate: (data) => dispatch(expenseUpdate(data)),
        expenseDelete: (data) => dispatch(expenseDelete(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);