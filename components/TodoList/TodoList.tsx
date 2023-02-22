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
        <ul className="full-width max-width__40rem">
          {todosState.map((todo: Todo) => (
            <li key={todo.id} className="todo-list__li">
              <div className={`todo-list__li__text ${todo.completed ? "text-decoration__line-through" : ""}`.trim()}>
                {todo.task}
              </div>
              <div className="display__flex">
                <input className="m-l__1rem" type="checkbox" checked={todo.completed} onChange={() => onFinishTask(todo.id)} />
                <button onClick={() => onDeleteTask(todo.id)}>x</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="min-width__5rem" onClick={onResetTasks}>Reset</button>
    </>
  )
}

export default TodoList