import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearMsg} from "./todoSlice";

const TodoMsg = () => {

    const dispatch = useDispatch()
    const msg = useSelector(state => state.todo.msg)

    useEffect((e) => {
        console.log("useEffect")

        setTimeout(() => {

            dispatch(clearMsg())

        }, 2000)


    },[msg])

    return (
        <div>
            <h1>{msg}</h1>
        </div>
    );
};

export default TodoMsg;