import axios from "../config/axios";
import { Data } from "../config/models";

const useSendTask = () => {

  const sendTask = async (data: Data) => {
    try {
      const response = await axios.post(
       `${process.env.REACT_APP_API_URL}/api`,
        JSON.stringify({
          name: data.name,
          completed: data.completed
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error: any) {
      if (!error.response) {
        console.error(error.message);
      }
    }
  };

  return { sendTask };
};

export default useSendTask;
