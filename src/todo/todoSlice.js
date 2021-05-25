import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const getServerPage = async (page) => {
    console.log("getServerPage..." + page)
    const res = await axios.get("http://localhost:8080/todo/pages?page=" + page)
    return res.data
}

const addTodoFn = async (todo) => {

    console.log("addTodo Ajax...")

    const res = await axios.post("http://localhost:8080/todo", todo)

    return res.data

}

const deleteTodoFn = async (todo) => {

    const res = await axios.delete("http://localhost:8080/todo/"+todo.tno, {data:{...todo}})

    return res.data
}

const updateTodoFn = async (todo) => {

    const res = await axios.put("http://localhost:8080/todo/"+todo.tno, todo)

    return res.data

}


export const fetchPage = createAsyncThunk('todo/fetchPage', getServerPage )

export const addTodo = createAsyncThunk('todo/add', addTodoFn)

export const deleteTodo = createAsyncThunk('todo/delete', deleteTodoFn)

export const updateTodo = createAsyncThunk('todo/update', updateTodoFn)


export const todoSlice = createSlice({
    name:"todo",
    initialState: {
        pageResult:{
            dtoList:[],
            page: 1,
            pageList: [],
            start:1,
            end:1,
            prev:false,
            next:false
        },
        msg: ''

    },
    reducers: {
        clearMsg: (state) => {
            state.msg =''
        }
    },
    extraReducers: {
        [fetchPage.fulfilled]: (state, {meta,payload}) => {
            console.log(payload)
            state.pageResult = payload
        },
        [addTodo.fulfilled]: (state, {payload}) => {
            console.log("addTodo: " + payload)
            state.msg = payload
        },
        [deleteTodo.fulfilled]: (state, {payload}) => {
            console.log("delete todo: " + payload)
            state.msg = payload
        },
        [updateTodo.fulfilled]: (state, {payload}) => {
            console.log("update todo: " + payload)
            state.msg = payload
        }

    }


})

export const {clearMsg} = todoSlice.actions
export default todoSlice.reducer