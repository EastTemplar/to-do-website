import axios from "axios";

export const markDoneTask = async (index: number, isDone: boolean) => {
  try {
    return axios({
      method: "patch",
      url: "http://localhost:5000/tasks",
      data: {
        id: index,
        isDone: isDone,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
