import { useState } from "react";
import { TaskForm } from "../../../widgets/taskForm";
import { CreateTaskForm } from "../../../features/createTask";
import { Task } from "../../../entities/task/types";
import { loadTasks } from "../api/loadTasks";
import { RemoveTaskButton } from "../../../features/deleteTask";
import styles from "./tasksPage.module.scss";

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function renderTasks() {
    loadTasks().then((response) => {
      setTasks(response?.data);
      console.log(response?.data);
    });
  }

  //useEffect(() => {
  //  renderTasks();
  //}, []);

  return (
    <div className={styles.pageWrapper}>
      {tasks.map((task) => (
        <TaskForm
          key={tasks.indexOf(task)}
          name={task.title}
          description={task.description}
        >
          <RemoveTaskButton onRemovedTask={renderTasks} taskId={task.id} />
        </TaskForm>
      ))}

      <CreateTaskForm onCreateTask={renderTasks} />
    </div>
  );
}
