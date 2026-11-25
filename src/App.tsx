import { type SubmitEvent, useState } from "react";
import type { Todo } from "./types";
import { todos as initialTodos } from "./data";
import { TodoList } from "./components/TodoList";
import { Counter } from "./components/Counter";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState("");

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((current) => [...current, newTodo]);
    setTitle("");
  }
  return (
    <main>
      <h1>React TODO</h1>
      <Counter />
      <form onSubmit={handleSubmit}>
        <label>
          新しいTODO
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <button type="submit">追加</button>
        <p>入力中:{title}</p>
      </form>
      <TodoList todos={todos} />
    </main>
    );
  }