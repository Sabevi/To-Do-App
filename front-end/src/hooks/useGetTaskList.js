import { useEffect, useState } from "react";
import axios from "../config/axios";

const useGetTaskList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
  }, []);
  
  return { loading, data, setData };
};

export default useGetTaskList;
