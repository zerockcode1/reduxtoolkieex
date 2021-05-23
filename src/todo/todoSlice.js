import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const getServerPage = async (page) => {
    console.log("getServerPage..." + page)
    const res = await axios.get("http://localhost:8080/todo/pages?page=" + page)
    return res.data
}

export const fetchPage = createAsyncThunk('todo/fetchPage', getServerPage )


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
        }
    },
    reducers: {
    },
    extraReducers: {
        [fetchPage.fulfilled]: (state, {meta,payload}) => {
            console.log(payload)
            state.pageResult = payload
        }
    }


})

export default todoSlice.reducer