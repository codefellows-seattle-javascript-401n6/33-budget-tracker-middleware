import {
  CATEGORY_CREATE,
  CATEGORY_DESTROY,
  CATEGORY_UPDATE,
} from '../action/budget-actions';

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
        
        Object.assign(newState, state, {categories: [newCategory]});
        
        return newState;
      }
      newCategories.push(newCategory);
      Object.assign(newState, state, {categories: newCategories});
      return newState;
    case CATEGORY_UPDATE:
      
      let updatedCat = state.categories[action.data.index];
      newCategories = state.categories.slice();
      updatedCat.name = action.data.name;
      updatedCat.budget = action.data.budget;
      newCategories[action.data.index] = updatedCat;
      return Object.assign(newState, state, {categories: newCategories});
    case CATEGORY_DESTROY:
      
      let id = action.data.id;
      newCategories = state.categories.filter(function (el) {
        return el.id !== id
      });
      
      
      return Object.assign(newState, state, {categories: newCategories});
    default: 
    
    return state;
  }
}