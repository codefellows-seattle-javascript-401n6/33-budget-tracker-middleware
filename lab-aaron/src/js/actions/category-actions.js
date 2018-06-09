export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

// export const categoryCreate = (categoryValue) => {
//   return {type: CATEGORY_CREATE, categoryValue}
// }

export function categoryCreate(categoryObj) {
  return {
    // type: CATEGORY_CREATE,
    type: CATEGORY_CREATE,
    categoryObj
  };
};

export function categoryUpdate(categoryObj) {
  return {
    type: CATEGORY_UPDATE, 
    categoryObj
    // category: category //is also
    // payload: category     //is the same as line above
  };
};

export function categoryDestroy(uuidv4) {
  return {
    type: CATEGORY_DESTROY,
    id: uuidv4
  };
};