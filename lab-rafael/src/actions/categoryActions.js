export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export const createCategory = category => ({ type: CATEGORY_CREATE, payload: category});
export const updateCategory = category => ({ type: CATEGORY_UPDATE, payload: category});
export const destroyCategory = category => ({ type: CATEGORY_DESTROY, payload: category});
