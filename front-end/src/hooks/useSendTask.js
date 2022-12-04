import axios from "../config/axios";

const useSendTask = () => {

  const sendTask = async (data) => {
    try {
      await axios.post( 
       `${process.env.REACT_APP_API_URL}/api/todo`,
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
