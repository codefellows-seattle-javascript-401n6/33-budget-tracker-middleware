import {
  CATEGORY_CREATE,
  CATEGORY_UPDATE,
  CATEGORY_DESTROY,
} from '../actions/category-actions';
import uuidv4 from 'uuid/v4';

// const initialReducerState = {
//   categoriesList: {}
// };
const initialReducerState = {
  categoriesList: [],
};

function categoryReducer(state, action) {
  console.log('CATEGORY REDUCER');
  if (state === undefined) {
    console.log('ping CATEGORY initialState');
    return initialReducerState;
  };
  
  
  let newState = {};
  let newList = [];
  let currentCategories;

  
console.log('action: ', action.type, state);

  switch(action.type) {
    case CATEGORY_CREATE:
      console.log('CATEGORY_CREATE ACTION');
      newList = state.categoriesList.map(array => {
        return array;
      });
      console.log('newList: ', newList);
      const addedPropsObj = {
        ...action.categoryObj,
        timestamp: new Date(),
        id: uuidv4(),
      };
      newList.push(addedPropsObj);
      console.log('newList after .push(): ', newList);
      return Object.assign(newState, {
        categoriesList: newList
      });
    // return Object.assign(newState, state, {categoriesList: state.categoriesList.push(action.categoryObj)});
    
    case CATEGORY_UPDATE:
      currentCategories = state.categoriesList.map(element => {
        console.log('UPDATE ACTION');
        if (element.id === action.categoryObj.id) {
          return Object.assign({}, element, action.categoryObj)
        } else {
          return element;
        }
      });
      return Object.assign(newState, state, {categoriesList: currentCategories});
    
    case CATEGORY_DESTROY:
      currentCategories = state.categoriesList.filter(element => {
        console.log('DELETE ACTION', action.id);
        return element.id !== action.id;
      });
      return Object.assign(newState, state, { categoriesList: currentCategories });

    default:
      return state;
  }
};

export default categoryReducer;