import React from 'react';
import {connect} from 'react-redux';
import TodoListItem from "./TodoListItem";

function TodoList({todoList}) {
    return (
        <ul className="list-group App">
            {todoList.map((itemList)=>
                <TodoListItem key={itemList.name} itemList={itemList}/>
            )}
        </ul>

    );
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    }

}

function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);