import axios from "axios";
import { Task } from "../../../entities/task/types";

export function loadTasks(): Task[] {
  axios.get("http://localhost:5000/tasks").then((response) => {
    return response.data as Task[];
  });

  return [] as Task[];
}
