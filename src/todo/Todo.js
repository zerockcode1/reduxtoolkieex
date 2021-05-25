import React from 'react';
import TodoList from "./TodoList";
import PageList from "./PageList";
import {useDispatch} from "react-redux";
import {fetchPage} from "./todoSlice";
import TodoInput from "./TodoInput";
import TodoMsg from "./TodoMsg";



const Todo = () => {

    const dispatch = useDispatch()

    const goReset = () => {
        dispatch(fetchPage(1))
    }

    return (
        <div>
            <h1>Todo</h1>
            <TodoMsg></TodoMsg>
            <TodoInput></TodoInput>

            <button onClick={() => goReset()}>Reset</button>
            <TodoList></TodoList>
            <PageList></PageList>
        </div>
    );
};

export default Todo;