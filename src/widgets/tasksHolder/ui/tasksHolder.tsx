import { useState } from "react";
import { Task } from "../../../entities/task/types";
import { CreateTaskForm } from "../../../features/createTask";
import { RemoveTaskButton } from "../../../features/deleteTask";
import { loadTasks } from "../../../pages/tasksPage/api/loadTasks";
import styles from "./tasksHolder.module.scss";
import { TaskForm } from "../../../entities/task";

export function TasksHolder() {
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
