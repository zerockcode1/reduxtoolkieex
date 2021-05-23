import React from 'react';
import TodoList from "./TodoList";
import PageList from "./PageList";
import {useDispatch} from "react-redux";
import {fetchPage} from "./todoSlice";

const Todo = () => {

    const dispatch = useDispatch()

    const goReset = () => {
        dispatch(fetchPage(1))
    }

    return (
        <div>
            <h1>Todo</h1>
            <button onClick={() => goReset()}>Reset</button>
            <TodoList></TodoList>
            <PageList></PageList>
        </div>
    );
};

export default Todo;