import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({                               //this function helps us to create our store
    reducer: todoReducer,
});                            