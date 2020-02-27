import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';

import store from './store';
import './App.css';
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import ListModalForm from "./components/ListModalForm";


function App() {
  return (
    <Provider store={store}>
        <Header/>
        <TodoList/>
        <ListModalForm/>
    </Provider>
  );
}

export default App;
