import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDestroy,
} from '../../actions/category-actions.js';

import CategoryList from './categoryList.jsx';
import CategoryForm from './categoryForm.jsx';

class Dashboard extends React.Component {

  render() {
    return <div>
      <h1>Track Your Budget</h1>
      <h2>Create A Category:</h2>
      <CategoryForm name="create"></CategoryForm>
      <CategoryList categories={this.props.categories}></CategoryList>
    </div>;
  }
}

const mapStateToProps = state => {
  return { categories: state.categoryStore.categories };
};


const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(Dashboard);