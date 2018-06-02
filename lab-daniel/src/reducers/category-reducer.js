import {
    CATEGORY_CREATE,
    CATEGORY_UPDATE,
    CATEGORY_DESTROY
} from '../actions/category-actions'

const initialState = {
    categories: []
}

export default function categoryReducer(state, action) {
    if (state === undefined) {
        return initialState;
    }

    let newState = {}
    let newCats = [];
    let currentCategories;
    let updateCategories;
    let categoryIndex;
    let categoryToRemove;

    switch (action.type) {
        case CATEGORY_CREATE:
            let newCats = state.categories.map(ele => {
                return ele;
            });
            newCats.push(action.category)
            return Object.assign(newState, {
                categories: newCats
            });


        case CATEGORY_UPDATE:
            let newObject = {};
            currentCategories = state.categories.map(ele => {
                if (ele.id === action.category.id) {
                    ele.isEditing = !ele.isEditing;
                    ele.name = action.category.name;
                    ele.budget = action.category.budget;
                }
                return ele;
            })
            let newObj = Object.assign(newObject, state, { categories: currentCategories });
            return newObj


        case CATEGORY_DESTROY:
            currentCategories = state.categories.filter(ele => {
                return ele.id !== action.id
            })
            return Object.assign(newState, state, { categories: currentCategories });

        default: return state;
    }
}
