import { useEffect, useState } from "react";
import { useRefresh } from "./useRefresh";
import axios from "../config/axios";

const useGetToDoList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refresh, count] = useRefresh();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data: response } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/todo`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setData(response);

      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [count]);

  return { loading, data, refresh };
};

export default useGetToDoList;
