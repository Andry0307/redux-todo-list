export const SHOW_MODAL = 'SHOW_MODAL';
export function showModal() {
    return {type: SHOW_MODAL}
}

export const CLOSE_MODAL = 'CLOSE_MODAL';
export function closeModal() {
    return {type: CLOSE_MODAL}
}

export const CHANGE_VALUE = 'CHANGE_VALUE';
export function changeValue(changes) {
    return {type: CHANGE_VALUE, payload: changes}
}

export const FORM_SUBMIT = 'FORM_SUBMIT';
export function onFormSubmit(listItem) {
    console.log('listItem', listItem);
    return {type: FORM_SUBMIT, payload: listItem}
}

export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export function deleteListItem(id) {
    return {type: DELETE_LIST_ITEM, payload: id}
}

export const EDIT_LIST_ITEM = 'EDIT_LIST_ITEM';
export function editListItem(listItem) {
    return {type: EDIT_LIST_ITEM, payload: listItem}
}
