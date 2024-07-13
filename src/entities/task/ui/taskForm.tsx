import { ReactNode } from "react";
import { Paper } from "../../../shared/ui/paper";
import styles from "./taskForm.module.scss";

interface ITaskFormProps {
  name: string;
  upperSlot?: ReactNode;
  lowerSlot?: ReactNode;
}

export function TaskForm(props: ITaskFormProps) {
  const { name, upperSlot, lowerSlot } = props;

  return (
    <Paper elevation={5} className={styles.form}>
      <div>{upperSlot}</div>
      <h2 className={styles.title}>{name}</h2>
      <div>{lowerSlot}</div>
    </Paper>
  );
}
