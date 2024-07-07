import { MouseEvent, useState } from "react";
import { Button } from "../../../shared/ui/button";
import styles from "./createTaskForm.module.scss";
import { createTask } from "../api/createTask";

interface ICreateTaskFormProps {
  onCreateTask: () => void;
}

export function CreateTaskForm(props: ICreateTaskFormProps) {
  const { onCreateTask } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function createNewTask(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    onCreateTask();
    createTask(title, description);
  }

  return (
    <form className={styles.container}>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <input
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <Button variant="contained" onClick={createNewTask}>
        Submit
      </Button>
    </form>
  );
}
