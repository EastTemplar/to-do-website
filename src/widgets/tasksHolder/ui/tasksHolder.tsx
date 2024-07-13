import { useEffect, useState } from "react";
import { getTasks, TaskForm } from "../../../entities/task";
import { Task } from "../../../entities/task/types";
import { RemoveTaskButton } from "../../../features/deleteTask";
import { MarkDoneCheckbox } from "../../../features/markDoneTask/ui/markDoneCheckbox";
import styles from "./tasksHolder.module.scss";

export function TasksHolder() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function renderTasks() {
    getTasks().then((response) => {
      setTasks(response?.data);
    });
  }

  useEffect(() => {
    renderTasks();
  }, [tasks]);

  return (
    <div className={styles.holder}>
      {tasks.map((task) => (
        <TaskForm
          key={tasks.indexOf(task)}
          name={task.title}
          upperSlot={<MarkDoneCheckbox taskId={task.id} />}
          lowerSlot={<RemoveTaskButton taskId={task.id} />}
        />
      ))}
    </div>
  );
}
