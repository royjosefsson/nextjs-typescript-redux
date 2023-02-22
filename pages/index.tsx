import { addTask, resetTasks, finishTask, deleteTask } from "../store/todosSlice";
import { useDispatch } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import Form from "../components/Form/Form";
import { Todo } from "../types/Todo";

const Home = () => {
  const dispatch = useDispatch();

  const createTask = (task: string): Todo => {
    return { id: Date.now(), task, completed: false }
  }

  const onFinishTask = (taskId: number) => {
    dispatch(finishTask(taskId))
  }

  const onDeleteTask = (taskId: number) => {
    dispatch(deleteTask(taskId))
  }

  const onResetTasks = () => {
    dispatch(resetTasks())
  }

  const onAddTask = (task: string) => {
    const createdTask = createTask(task)
    dispatch(addTask(createdTask))
  }

  return (
    <div className="home">
      <h1>Todo</h1>
      <Form
        onAddTask={onAddTask}
      />
      <TodoList
        onFinishTask={onFinishTask}
        onDeleteTask={onDeleteTask}
        onResetTasks={onResetTasks}
      />
    </div>
  );
};

export default Home;
