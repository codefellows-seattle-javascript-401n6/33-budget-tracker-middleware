import {
  CATEGORY_CREATE,
  CATEGORY_DESTROY,
  CATEGORY_UPDATE,
} from '../action/budget-actions';
console.log('cat dest', CATEGORY_DESTROY);
import uuidv4 from 'uuid/v4';

const initialState = {
  appName: 'This Is My Budget APPPP',
  categories: [
    {
      id: `${uuidv4()}`,
      timestamp: `${new Date()}`,
      name: 'please add a budget category',
      budget: 0,
    }
  ]
};

export default function counterReducer(state, action) {
  console.log('action', action)
  if (state === undefined) {
    return initialState;
  }

  let newState = {};
  let newCategories;
  switch(action.type) {
    case CATEGORY_CREATE:
      let newCategory = {id: `${uuidv4()}`, timestamp: `${new Date()}`, name: action.data.name, budget: `${parseFloat(action.data.budget)}`}
      newCategories = state.categories.slice();
      if(state === initialState){
        console.log('it worked')
        Object.assign(newState, state, {categories: [newCategory]});
        console.log('newstate', newState)
        return newState;
      }
      newCategories.push(newCategory);
      Object.assign(newState, state, {categories: newCategories});
      return newState;
    case CATEGORY_UPDATE:
      console.log('switch index', action.data.index)
      let updatedCat = state.categories[action.data.index];
      newCategories = state.categories.slice();
      updatedCat.name = action.data.name;
      updatedCat.budget = action.data.budget;
      newCategories[action.data.index] = updatedCat;
      return Object.assign(newState, state, {categories: newCategories});
    case CATEGORY_DESTROY:
      console.log('starting destroy')
      let id = action.data.id;
      newCategories = state.categories.filter(function (el) {
        return el.id !== id
      });
      
      console.log('newcats', newCategories);
      return Object.assign(newState, state, {categories: newCategories});
    default: 
    console.log('default')
    return state;
  }
}