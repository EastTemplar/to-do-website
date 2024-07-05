import axios from "axios";

export const removeTask = async (index: number) => {
  try {
    return await axios.delete("http://localhost:5000/tasks", {
      data: {
        id: index,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
