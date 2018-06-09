import React from 'react';
import {connect} from 'react-redux';
import {
  expenseCreate,
  expenseUpdate,
  expenseDestroy,
} from '../actions/expense-actions';
import CategoryForm from './CategoryForm';
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  };


  controlDelete = () => {
    const {//Is Called DESTRUCTURING
      onDestroy,
      arrayElement: {
        id,
      }
    } = this.props
    onDestroy(id);
  }; //IS THE SAME AS..
  // controlDelete = () => {
  //   const onDestroy = this.props.onDestroy;
  //   const id = this.props.arrayElement.id;
  // };



  render() {
    return (
      <div className="categoryFormItem">
        <div>
          {this.props.arrayElement.name}--${this.props.arrayElement.price}
        </div>
        <button onClick={() => this.controlDelete()}>
          Remove Item (Category)
        </button>
        <CategoryForm 
          category={this.props.arrayElement} 
          onSubmit={this.props.update}
          name="update" 
        />
        <ExpenseForm 
          onSubmit={this.props.categoryItemExpenseCreate} 
          categoryID={this.props.arrayElement.id}
          buttonText="Add Expense"
        />
          {this.props.categoryItemPropertyExpenses.map((element) => {
            if(this.props.arrayElement.id === element.categoryID) {
              return <ExpenseItem 
                update={this.props.categoryItemExpenseUpdate} 
                key={element.id} expenseItem={element}
                onDestroy={this.props.categoryItemExpenseDestroy} 
              />
            }
          })}
      </div>
    )
  }
    
};

const mapStateToProps = (state) => {
  return {
    categoryItemPropertyExpenses: state.expenseReducer.expensesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryItemExpenseCreate: (expenseObj) => dispatch(expenseCreate(expenseObj)),
    categoryItemExpenseUpdate: (expenseObj) => dispatch(expenseUpdate(expenseObj)),
    categoryItemExpenseDestroy: (id) => dispatch(expenseDestroy(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);