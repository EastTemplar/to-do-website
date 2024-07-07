import axios from "axios";

export const getTasks = async () => {
  try {
    return await axios.get("http://localhost:5000/tasks");
  } catch (error) {
    console.error(error);
  }
};
