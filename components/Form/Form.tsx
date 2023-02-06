import { useRef } from "react";

export interface FormProps {
  onAddTask: (task: string) => void;
}

const Form = (props: FormProps) => {
  const { onAddTask } = props

  const handleOnAddTask = (e: any) => {
    e.preventDefault()
    if (!formRef.current) {
      return
    }

    const task = formRef.current.task.value;
    if (task === "") {
      return
    }
    onAddTask(task)
    formRef.current.reset()
  }

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form ref={formRef} className="form">
      <input name="task" type="text" className="min-width__40rem" />
      <button onClick={handleOnAddTask} className="min-width__5rem m-l__1rem">Add</button>
    </form>
  )
}

export default Form