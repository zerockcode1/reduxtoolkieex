import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, fetchPage, updateTodo} from "./todoSlice";

const TodoItem = ({todo}) => {

    const [title, setTitle] = useState(todo.title)
    const [content, setContent] = useState(todo.content)

    const dispatch = useDispatch()

    const page = useSelector(state => state.todo.pageResult.page)

    const deleteTodoFn = async (todo) => {

        await dispatch(deleteTodo(todo))
        await dispatch(fetchPage(1))
    }

    const updateTodoFn = async (todo) => {

        await dispatch(updateTodo({title:title, content:content, tno:todo.tno}))
        await dispatch(fetchPage(page))
    }

    return (
        <div>
            <h6>{todo.tno}</h6>
            <div>
                <input value={title}  onChange={(e) => {setTitle(e.target.value)} }/>
            </div>
            <div>
                <input value={content}  onChange={(e) => {setContent(e.target.value)} }/>
            </div>
            <div>
                <button onClick={() => updateTodoFn(todo) }>MOD</button>
                <button onClick={() => deleteTodoFn(todo) }>DEL</button>
            </div>
        </div>
    );
};

export default TodoItem;