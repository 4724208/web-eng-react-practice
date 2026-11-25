import { todos } from "./data";
import { TodoList } from "./components/TodoList";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <main>
      <h1>React TODO</h1>
      <Counter />
      <TodoList todos={todos} />
    </main>
  );
}