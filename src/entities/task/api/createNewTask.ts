import axios from "axios";

export const createNewTask = async (title: string, description: string) => {
  try {
    await axios.post("http://localhost:5000/tasks", {
      data: {
        title: title,
        description: description,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
