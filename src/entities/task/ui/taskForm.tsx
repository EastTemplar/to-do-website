import { ReactNode } from "react";
import { Paper } from "../../../shared/ui/paper";
import styles from "./taskForm.module.scss";

interface ITaskFormProps {
  name: string;
  description?: string;
  slot?: ReactNode;
}

export function TaskForm(props: ITaskFormProps) {
  const { name, description, slot } = props;

  return (
    <Paper elevation={5} className={styles.form}>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.slot}>{slot}</div>
      </div>
    </Paper>
  );
}
