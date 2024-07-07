import { MouseEvent, useState } from "react";
import { Button } from "../../../shared/ui/button";
import styles from "./createTaskForm.module.scss";
import { createNewTask } from "../../../entities/task";
import { Input } from "@mui/material";
import { Paper } from "../../../shared/ui/paper/index";

interface ICreateTaskFormProps {
  onCreateTask: () => void;
}

export function CreateTaskForm(props: ICreateTaskFormProps) {
  const { onCreateTask } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function createTask(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    onCreateTask();
    createNewTask(title, description);
  }

  return (
    <Paper elevation={3} className={styles.container}>
      <Input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />

      <Input
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />

      <Button variant="contained" onClick={createTask}>
        Submit
      </Button>
    </Paper>
  );
}
