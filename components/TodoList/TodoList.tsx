import { useSelector } from "react-redux";
import { selectTodosState } from "../../store/todosSlice";
import { Todo } from "../../types/Todo";

export interface TodoListProps {
  onFinishTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
  onResetTasks: () => void;
}

const TodoList = (props: TodoListProps) => {

  const { onFinishTask, onDeleteTask, onResetTasks } = props

  const todosState = useSelector(selectTodosState);
  if (!todosState || todosState.length === 0) {
    return null
  }

  return (
    <>
      <div className="todo-list">
        <ul>
          {todosState.map((todo: Todo) => (
            <li key={todo.id} className="todo-list__li">
              <div className={`min-width__40rem ${todo.completed ? "text-decoration__line-through" : ""}`.trim()}>
                {todo.task}
              </div>
              <input className="m-l__1rem" type="checkbox" checked={todo.completed} onChange={() => onFinishTask(todo.id)} />
              <button onClick={() => onDeleteTask(todo.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      <button className="min-width__5rem" onClick={onResetTasks}>Reset</button>
    </>
  )
}

export default TodoList