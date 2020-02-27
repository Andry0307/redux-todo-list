import todoList from '../todoList';
import {SHOW_MODAL, CLOSE_MODAL, CHANGE_VALUE,
    FORM_SUBMIT, DELETE_LIST_ITEM, EDIT_LIST_ITEM} from './actions'

const initState = {
    todoList: todoList,
    newListItem: {
        name: ''
    },
    showModalForm: false
};

export default function (state = initState, action) {
    console.log('action', action);
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, showModalForm: true};
        case CLOSE_MODAL:
            return {...state, showModalForm: false};
        case CHANGE_VALUE:
            return {...state, newListItem:{...state.newListItem, ...action.payload}};
        case FORM_SUBMIT:
            if(!action.payload.id){
                return {...state, todoList: [...state.todoList, {id:Date.now(), ...action.payload}],
                    newListItem: {name: ''} }
            }else {
                return {...state, todoList: state.todoList.map((item)=>{
                        if(!action.payload.id){
                            return {id:Date.now(), ...action.payload}
                        }
                        if(item.id === action.payload.id){
                            return action.payload
                        }else {
                            return item
                        }
                    }),
                    newListItem: {name: ''} };
            }

        case DELETE_LIST_ITEM:
            return {...state, todoList: state.todoList.filter((item)=>{
                    return item.id !== action.payload
                })};
        case EDIT_LIST_ITEM:
            return {...state, newListItem: action.payload};
        default:
            return state;
    }
}

// todoList: [...state.todoList, {id:Date.now(), ...action.payload}],