import React from 'react';
import {connect} from 'react-redux';
import {deleteListItem, editListItem, showModal} from '../store/actions';

function TodoListItem({itemList, deleteItem, editItem, onShowModal}) {

    function Edit(e) {
        e.stopPropagation();
        onShowModal();
        editItem(itemList)
    }
    return (
        <li className={`list-group-item`}>
            {itemList.name}
            <button className='btn btn-danger li_button' onClick={()=>{deleteItem(itemList.id)}}>
                delete
            </button>
            <button className='btn btn-secondary li_button' onClick={(e)=>{Edit(e)}}>
                edit
            </button>
        </li>
    );
}
function mapStateToProps(state) {
    return{}
}

const mapDispatchToProps = {
    deleteItem: deleteListItem,
    editItem: editListItem,
    onShowModal: showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);