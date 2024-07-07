import axios from "axios";

export const createNewTask = (title: string, description: string) => {
  try {
    return axios({
      method: "post",
      url: "http://localhost:5000/tasks",
      data: {
        title: title,
        description: description,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
