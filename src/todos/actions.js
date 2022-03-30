//OPCIÓ MIDDLEWARE

export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos };
}

export const REQUEST_ADD_TODO = "todos/REQUEST_ADD_TODO";
export function requestAddTodo(todo) {
  return { type: REQUEST_ADD_TODO, todo };
}

export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(upDatedTodo) {
  return { type: UPDATE_TODO, todo: upDatedTodo };
}

export const REQUEST_UPDATE_TODO = "todos/REQUEST_UPDATE_TODO";
export function requestUpdateTodo(upDatedTodo) {
  return { type: REQUEST_UPDATE_TODO, todo: upDatedTodo };
}

/************OPCIO THUNK

import { getTodos } from "./todosAPI";

// export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return async (dispatch) => {
    const todos = await getTodos();
    dispatch(replaceTodos(todos));
  };
}

export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos };
}
export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(upDatedTodo) {
  return { type: UPDATE_TODO, todo: upDatedTodo };
}
*/
