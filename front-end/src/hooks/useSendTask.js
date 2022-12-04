import axios from "../config/axios";

const useSendTask = () => {

  const sendTask = async (data) => {
    try {
      await axios.post(
        "http://localhost:8000/api/todo",
        JSON.stringify({
          task: data.task,
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

  return { sendTask };
};

export default useSendTask;
