import React from 'react';
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux';
import { create, destroy, update } from '../actions/category-actions';


class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            budget: '',
            isEditing: false
        }
        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);

        
    }

    submit(e) {
        e.preventDefault();
        if (this.props.name === 'update') {
            const category = Object.assign({}, this.props.category, this.state);
            this.props.update(category)
            this.setState({ isEditing: !this.state.isEditing });
            console.log('Updated Category', category)
        } else {
            const category = Object.assign({}, this.state, { id: uuidv4(), timestamp: new Date() });
            this.props.create(category);
            console.log('New Category: ', category);
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <form onSubmit={this.submit}>
                <input id="name" name="name" type="text" onChange={this.onChange} placeholder="Budget Category" />
                <input id="budget" name="budget" type="text" onChange={this.onChange} placeholder="Description" />
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
        create: (category) => dispatch(create(category)),
        destroy: (id) => dispatch(destroy(id)),
        update: (category) => dispatch(update(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);