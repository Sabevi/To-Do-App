import axios from "../config/axios";

const useDeleteTask = () => {

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/todo/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      if (!error.response) {
        console.error(error.message);
      }
    }
  };

  return { deleteTask };
};

export default useDeleteTask;
