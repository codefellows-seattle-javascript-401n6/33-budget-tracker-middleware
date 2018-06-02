export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DESTROY = 'CATEGORY_DESTROY';

export function create(category) {
    return { type: CATEGORY_CREATE, category}
}

export function update(category) {
    return { type: CATEGORY_UPDATE, category}
}

export function destroy(id) {
    return { type: CATEGORY_DESTROY, id}
}