import { createReducer } from "@reduxjs/toolkit";

// Actions


// Types
import { ITodoNewsState } from "./todoNews.types";


const initialState: ITodoNewsState = {
    list: [],
    entry: {},
    loading: false,
    error: false,
}

const todoNewsReducer = createReducer(initialState, (builder) => {
    builder
        .addDefaultCase((state) => state);
})

export default todoNewsReducer;