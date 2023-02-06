import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../types/Todo";

import { AppState } from "./store";

export interface InitialTodosState {
  todosState: any;
}

const initialState: InitialTodosState = {
  todosState: []
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask(state, action) {
      state.todosState = [action.payload, ...state.todosState];
    },
    finishTask(state, action) {
      let newTodoState = JSON.parse(JSON.stringify(state.todosState))
      const foundIndex = newTodoState.findIndex((x: Todo) => x.id === action.payload)
      newTodoState[foundIndex] = { ...newTodoState[foundIndex], completed: !newTodoState[foundIndex].completed }
      state.todosState = newTodoState;
    },
    deleteTask(state, action) {
      state.todosState = [...state.todosState.filter((x: Todo) => x.id !== action.payload)];
    },
    resetTasks(state) {
      state.todosState = [];
    },
  },
});

export const {
  addTask,
  resetTasks,
  finishTask,
  deleteTask
} = todosSlice.actions;

export const selectTodosState = (state: AppState) => state.todos.todosState;

export default todosSlice.reducer;
