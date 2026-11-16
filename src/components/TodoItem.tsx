import type { Todo } from "../types";

type TodoItemProps = {
    todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const isOverdue = todo.dueDate
   ? new Date(`${todo.dueDate}T23:59:59`) < new Date()
   : false;

  return (
    <li>
        <span>{todo.title}</span>
        <span> {todo.completed ? "(完了)" : "(未完了)"}</span>
        {todo.dueDate && (
            <span style={{ color: isOverdue ? "red" : "inherit", marginLeft: "0.5em" }}>
                期限: {todo.dueDate}
            </span>
        )}
    </li>
   );
}