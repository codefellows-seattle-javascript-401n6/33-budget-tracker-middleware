import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { create, destroy, update } from '../actions/category-actions'
import CategoryForm from './CategoryForm';
import ExpenseForm from './ExpenseForm';

class CategoryItem extends React.Component {
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
        this.props.destroy(id);
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
        const categoryId = this.props.id;
        if (this.state.isEditing != false) {
            return (
                <div className="handleEdit" onSubmit={this.handleEdit}>
                    <CategoryForm name="update" category={this.props.cat}></CategoryForm>
                    <button id="close-edit" onClick={this.cancelEdit}>CLOSE EDIT</button>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                    <form className="bills">
                        <h3>Budget Category: {this.props.name}</h3>
                        <h3>Description: {this.props.budget}</h3>
                        <div id="item-buttons">
                            <button className="remove" name='destroy' onClick={this.handleRemove}>Remove</button>
                            <button className="edit" onClick={this.handleEdit}>Edit</button>
                        </div>
                    </form>
                    <ExpenseForm expenseCreate={this.props.expenseCreate} id={this.props.id} />
                </React.Fragment>
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
        create: (category) => dispatch(create(category)),
        destroy: (id) => dispatch(destroy(id)),
        update: (category) => dispatch(update(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

