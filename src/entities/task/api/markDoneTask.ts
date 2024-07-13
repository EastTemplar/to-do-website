import axios from "axios";

export const markDoneTask = async (index: number, isDone: boolean) => {
  try {
    return await axios.patch("http://localhost:5000/tasks", {
      data: {
        id: index,
        isDone: isDone,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
