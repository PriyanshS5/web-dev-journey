import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: "abc", task: "demo-task", isDone: fasle}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);          //direct mutation
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)   //state k todos ko filter krna h toh jo action.payload k sath match kregi woh hme filter nhi krna h
         },
         markAsDone: (state, action) => {
          
            state.todos = state.todos.map((todo) =>{
                if(todo.id === action.payload) {
                todo.isDone = true;
                }
            });
         },
    },
});


export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;               // Action creators are generated for each case reducer function
export default todoSlice.reducer;