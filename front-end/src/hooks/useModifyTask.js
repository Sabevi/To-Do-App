import axios from "../config/axios";

const useModify = () => {

  const modifyTask = async (data, id) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/todo/${id}`,
        JSON.stringify({
          completed: data.completed
        }),
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

  return { modifyTask };
};

export default useModify;