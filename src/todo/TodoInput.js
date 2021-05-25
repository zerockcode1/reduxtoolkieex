import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addTodo, fetchPage} from "./todoSlice";

const TodoInput = () => {

    const titleRef = useRef()
    const contentRef = useRef()
    const dispatch = useDispatch()

    const send = async () => {

        console.log("TITLE: " + titleRef.current.value)
        console.log("CONTENT: " + contentRef.current.value)

        const todo = {title:titleRef.current.value, content:contentRef.current.value}

        await dispatch(addTodo(todo))
        await dispatch(fetchPage(1))
    }

    return (
        <div>
            <h3>Todo Input</h3>

            <div>
                <input type={'text'} ref={titleRef} />
            </div>
            <div>
                <input type={'text'} ref={contentRef}/>
            </div>
            <div>
                <button onClick={() => send()}>ADD</button>
            </div>
        </div>
    );
};

export default TodoInput;