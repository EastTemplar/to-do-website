import { useEffect, useState } from "react";
import styles from "./tasksPage.module.css";
import { TaskForm } from "../../../widgets/taskForm";
import { CreateTaskForm } from "../../../features/createTask";
import { Task } from "../../../entities/task/types";
import { loadTasks } from "../api/loadTasks";
import { RemoveTaskButton } from "../../../features/deleteTask";

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    renderTasks();
  }, []);

  function renderTasks() {
    loadTasks().then((response) => {
      setTasks(response?.data);
    });
  }

  return (
    <div className={styles.pageWrapper}>
      {tasks.map((task) => (
        <TaskForm
          key={tasks.indexOf(task)}
          name={task.title}
          description={task.description}
        >
          <RemoveTaskButton
            onRemovedTask={() => {
              renderTasks();
            }}
            taskId={task.id}
          />
        </TaskForm>
      ))}

      <CreateTaskForm onCreateTask={renderTasks} />
    </div>
  );
}
