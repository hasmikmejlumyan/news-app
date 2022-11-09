import { createReducer } from "@reduxjs/toolkit";

// Actions
import { todoNewsActions } from "./todoNews.actions";

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
        .addCase(todoNewsActions.getTodoInitialData.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase(todoNewsActions.getTodoInitialData.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(todoNewsActions.getTodoInitialData.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
        .addDefaultCase((state) => state);
})

export default todoNewsReducer;