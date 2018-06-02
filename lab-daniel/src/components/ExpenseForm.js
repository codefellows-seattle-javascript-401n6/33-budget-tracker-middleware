import React from 'react';
import { connect } from 'react-redux';
import { expenseCreate, expenseUpdate, expenseDelete } from '../actions/expense-actions.js'

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            timestamp: new Date(),
            id: this.props.id,
            isEditing: false
        }
        this.expenseSubmit = this.expenseSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    expenseSubmit(e) {
        e.preventDefault();
        if (this.props.name === 'edit') {
            const data = Object.assign({}, this.props.data, this.state);
            this.props.update(data)
            this.setState({ isEditing: !this.state.isEditing });
            console.log('Updated Category', data)
        } else {
            const data = Object.assign({}, this.state);
            this.props.expenseCreate(data);
            console.log('New Expense: ', data);

        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.expenseSubmit}>
                <input id="name" name="name" type="text" onChange={this.onChange} placeholder="Name" />
                <input id="price" name="price" type="number" onChange={this.onChange} placeholder="Price/Cost" />
                <button type="submit" onClick={this.submit} id="submit"> SUBMIT </button>
            </form>
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);