import { ReactNode } from "react";
import styles from "./taskForm.module.scss";
import { Paper } from "../../../shared/ui/paper";

interface ITaskFormProps {
  name: string;
  description?: string;
  slot?: ReactNode;
}

export function TaskForm(props: ITaskFormProps) {
  const { name, description, slot } = props;

  return (
    <Paper elevation={3} className={styles.form}>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.slot}>{slot}</div>
      </div>
    </Paper>
  );
}
