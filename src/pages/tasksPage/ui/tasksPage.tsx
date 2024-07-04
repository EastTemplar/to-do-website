import { useEffect, useState } from "react";
import styles from "./tasksPage.module.css";
import { Button } from "../../../shared/ui/button";
import { TaskForm } from "../../../widgets/taskForm";
import { CreateTaskForm } from "../../../features/createTask";
import { Task } from "../../../entities/task/types";
import { loadTasks } from "../api/loadTasks";

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  function assertRemoveTask(index: number) {
    if (index > tasks.length - 1) {
      throw new RangeError("Index is out of bounds!");
    }
  }

  function removeTask(index: number) {
    assertRemoveTask(index);
    const tasksTemp = tasks.slice();
    tasksTemp.splice(index, 1);
    setTasks(tasksTemp);
  }

  return (
    <div className={styles.pageWrapper}>
      {tasks.map((task) => (
        <TaskForm
          key={tasks.indexOf(task)}
          name={task.title}
          description={task.description}
        >
          <Button onClick={() => removeTask(tasks.indexOf(task))}>
            Delete
          </Button>
        </TaskForm>
      ))}
      <CreateTaskForm />
    </div>
  );
}
