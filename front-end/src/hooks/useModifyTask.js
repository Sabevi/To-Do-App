import axios from "../config/axios";

const useModify = () => {

  const modifyTask = async (data, id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/todo/${id}`,
        JSON.stringify({
          done: data.done
        }),
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

  return { modifyTask };
};

export default useModify;