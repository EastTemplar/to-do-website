import { MouseEvent, useState } from "react";
import { Button } from "../../../shared/ui/button";
import styles from "./createTaskForm.module.css";
import { createTask } from "../api/createTask";

export function CreateTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function createNewTask(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
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
      <Button onClick={createNewTask}>Submit</Button>
    </form>
  );
}
