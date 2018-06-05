import React from 'react';
import ExpenseForm from './ExpenseForm';

class ExpenseItem extends React.Component {

controlDelete = () => {
  const {
    onDestroy
  } = this.props
  onDestroy(this.props.expenseItem.id);
};

  render() {
    return (
      <div>
        <div>
          {this.props.expenseItem.name}--${this.props.expenseItem.price}
        </div>
        <button onClick={() => this.controlDelete()}>Remove Expense</button>
        <ExpenseForm 
          expense={this.props.expenseItem} 
          onSubmit={this.props.update}
          name="update" 
          buttonText="Update" 
        />
      </div>
    )
  };
};

export default ExpenseItem;