import type { Todo } from "../types";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
};

export function TodoItem({ todo, onToggle }: TodoItemProps) {
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
        <button type="button" onClick={() => onToggle(todo.id)}>
         {todo.completed ? "未完了に戻す" : "完了にする"}
        </button>
    </li>
   );
}