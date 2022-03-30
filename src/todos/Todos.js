import { useEffect } from "react";
import { AfegirToDo } from "./AfegirToDo";
import { requestTodos, requestAddTodo, requestUpdateTodo } from "./actions";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./selectors";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const loadTodos = () => dispatch(requestTodos());
  const onTodoAdded = (todo) => dispatch(requestAddTodo(todo));
  const onTodoUpdate = (todo) => dispatch(requestUpdateTodo(todo));

  return (
    <div className="App">
      <h1>Llistat de ToDo's</h1>
      <button onClick={loadTodos}>Refresh</button>
      <TodoList todos={todos} onTodoUpdate={onTodoUpdate} />
      <AfegirToDo onToDoAdded={onTodoAdded} />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}
