import axios from "../config/axios";

const useSendTask = () => {

  const sendTask = async (data) => {
    try {
      const response = await axios.post(
       `${process.env.REACT_APP_API_URL}/api/todo`,
        JSON.stringify({
          name: data.name,
          done: data.done
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

  return { sendTask };
};

export default useSendTask;
