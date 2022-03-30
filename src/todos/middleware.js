import {
  REQUEST_TODOS,
  REQUEST_ADD_TODO,
  REQUEST_UPDATE_TODO,
  replaceTodos,
  addTodo,
  updateTodo,
} from "./actions";
import { getTodos, postNewTodo, postUpdateTodo } from "./todosAPI";

export const todosMiddleware = (store) => (next) => async (action) => {
  next(action);

  if (action.type === REQUEST_TODOS) {
    const todos = await getTodos();
    store.dispatch(replaceTodos(todos));
  }
  if (action.type === REQUEST_ADD_TODO) {
    const todo = await postNewTodo(action.todo);
    store.dispatch(addTodo(todo));
  }
  if (action.type === REQUEST_UPDATE_TODO) {
    const todo = await postUpdateTodo(action.todo);
    store.dispatch(updateTodo(todo));
  }
};
