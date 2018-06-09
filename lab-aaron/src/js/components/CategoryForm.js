import React from 'react';


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
    };
  };
  static getDerivedStateFromProps(props, state) {
    if (props.category) {
      return {
        ...props.category,
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
    if (this.props.name === 'update') {
      console.log('categoryObj: ', this.props.category)
      const category = Object.assign({}, this.props.category, this.state);
      this.props.onSubmit(category);
      console.log('Is Updating.');
    } else {
      console.log('Created Item');
      let categoryObj = {
        name: this.state.name,
        price: this.state.price
      };
      this.props.onSubmit(categoryObj);
                           //the Dashboard passes a function reference to this component
                          //this line invoked the function, passing the categoryObj
      this.setState({
        name: '',
        price: 0,
      });
    };
  };

  render() {
    let buttonName = 'Submit'
    if(this.props.name === 'update') {
      buttonName = 'Update';
    };
    return (
      <form onSubmit={this.controlSubmit}>
        <div>
          <input type="text" placeholder="shoes"
            onChange={(event) => this.controlChange(event, 'name')}
            value={this.state.name} />
          <input type="number" placeholder="290"
            onChange={(event) => this.controlChange(event, 'price')}
            value={this.state.price} />
          <button type="submit">{buttonName}</button>
        </div>
      </form>
    )
  };
};

export default CategoryForm;