import axios from "axios";

export function createNewTask(title: string, description: string) {
  axios({
    method: "post",
    url: "http://localhost:5000/tasks",
    data: {
      title: title,
      description: description,
    },
  });
}
