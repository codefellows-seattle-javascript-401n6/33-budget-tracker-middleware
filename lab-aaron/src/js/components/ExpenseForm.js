import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    };
  };
  static getDerivedStateFromProps(props, state) {//WORKS JUST LIKE componentWillReceiveProps()
    if (props.expense) {
      return {
        ...props.expense,
      };
    } else {
      return null;
    };
  };

  controlChange = (event, secondInputArgument) => {
    let newState = {};
    newState[secondInputArgument] = event.target.value;
    this.setState(newState);
  };

  controlSubmit = (event) => {
    event.preventDefault();
    if (this.props.name === 'update') {//no update yet
      console.log('expenseObj: ', this.props.expense)
      const expense = Object.assign({}, this.props.expense, this.state);
      this.props.onSubmit(expense);
      console.log('Is Updating.');
    } else {
      console.log('Created Item');
      let expenseObj = {
        name: this.state.name,
        price: this.state.price,
        categoryID: this.props.categoryID,
      };
      this.props.onSubmit(expenseObj);
      this.setState({
        name: '',
        price: 0,
      });
    };
  };

  render() {
    const buttonText = this.props.buttonText;
    return (
      <form onSubmit={this.controlSubmit}>
        <div>
          <input type="text" placeholder="Adidas"
            onChange={(event) => this.controlChange(event, 'name')}
            value={this.state.name} />
          <input type="number" placeholder="$70"
            onChange={(event) => this.controlChange(event, 'price')}
            value={this.state.price} />
          <button type="submit">{buttonText}</button>
        </div>
      </form>
    )
  };
};

export default ExpenseForm;