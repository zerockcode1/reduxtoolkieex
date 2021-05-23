import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "./todoSlice";

const TodoList = () => {

    const pageResult = useSelector(state => state.todo.pageResult)
    const page = pageResult.page
    const dispatch = useDispatch()

    useEffect((e) => {
        dispatch(fetchPage(page))
    },[])

    console.log(pageResult)

    const list = pageResult.dtoList.map( todo => <li key={todo.tno}>{todo.tno} --- {todo.title}</li>)

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default TodoList;