import { Data } from "config/common.types";
import axios from "../config/axios";

const useModify = () => {

  const modifyTask = async (data: Data, id: number) => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/${id}`,
        JSON.stringify({
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

  return { modifyTask };
};

export default useModify;