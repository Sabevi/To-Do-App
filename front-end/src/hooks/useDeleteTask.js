import axios from "../config/axios";

const useDeleteTask = () => {

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/${id}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.error(error.message);
      }
    }
  };

  return { deleteTask };
};

export default useDeleteTask;
