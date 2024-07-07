import { useEffect, useState } from "react";
import { getTasks, TaskForm } from "../../../entities/task";
import { Task } from "../../../entities/task/types";
import { CreateTaskForm } from "../../../features/createTask";
import { RemoveTaskButton } from "../../../features/deleteTask";
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
  }, []);

  return (
    <div className={styles.holder}>
      {tasks.map((task) => (
        <TaskForm
          key={tasks.indexOf(task)}
          name={task.title}
          description={task.description}
          slot={
            <RemoveTaskButton onRemovedTask={renderTasks} taskId={task.id} />
          }
        />
      ))}

      <CreateTaskForm onCreateTask={renderTasks} />
    </div>
  );
}
