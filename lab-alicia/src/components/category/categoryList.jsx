import React from 'react';
import {connect} from 'react-redux';

import CategoryItem from './categoryItem.jsx';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.displayAllCategories = this.displayAllCategories.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete(category) {
    this.props.categoryDestroy(category);
  }

  handleUpdate(category) {
    this.props.categoryUpdate(category);
  }

  displayAllCategories() {
    return this.props.categories.map(category => {
      return <CategoryItem 
        key={category.id} 
        id={category.id} 
        name={category.name} 
        budget={category.budget}
        categoryDestroy={this.handleDelete}
        categoryUpdate={this.handleUpdate}
        isEditing={category.isEditing}>
      </CategoryItem>;
    });
  }

  render() {
    return (
      <div>
        <h2>Current Budget List:</h2>
        <ul>{this.displayAllCategories()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoryStore.categories,
});

const mapDispatchToProps = dispatch => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(CategoryList);