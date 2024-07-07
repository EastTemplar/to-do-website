import { useState } from "react";
import { Task } from "../../../entities/task/types";
import { CreateTaskForm } from "../../../features/createTask";
import { RemoveTaskButton } from "../../../features/deleteTask";
import styles from "./tasksHolder.module.scss";
import { TaskForm } from "../../../entities/task";
import { getTasks } from "../../../entities/task/api/getTasks";

export function TasksHolder() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function renderTasks() {
    getTasks().then((response) => {
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
