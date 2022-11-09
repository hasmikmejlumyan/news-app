import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

// Services
import todoNewsService from "../../services/todoNews.service";

// Action types
import { todoNewsActionTypes } from "./todoNews.actionTypes";

// Types
import { ITodoNews } from "../../types/todoNews";

const getTodoInitialData = createAsyncThunk<ITodoNews[]>(
    todoNewsActionTypes.GET_TODO_NEWS,
    async () => {
        try {
            const response = await todoNewsService.getTodoData<ITodoNews[]>();
            if (!response.status) {
               throw new Error('Something went wrong!');
            }

            return response;
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const todoNewsActions = {
    getTodoInitialData,
}