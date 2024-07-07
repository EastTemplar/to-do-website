import { ReactNode } from "react";
import styles from "./taskForm.module.scss";

interface ITaskFormProps {
  name: string;
  description?: string;
  children?: ReactNode;
}

export function TaskForm(props: ITaskFormProps) {
  const { name, description, children } = props;

  return (
    <div className={styles.taskFormContainer}>
      <div className={styles.taskFormFlexbox}>
        <h2>{name}</h2>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}
