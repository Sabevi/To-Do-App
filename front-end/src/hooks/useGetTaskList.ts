import { useEffect, useState } from "react";
import axios from "../config/axios";
import { Data } from "../config/models";

const useGetTaskList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setData(response);
  
      } catch (error: any) {
        console.log(error);
      }
      setLoading(false);
    };
    
    fetchData();
  }, []);
  
  return { loading, data, setData };
};

export default useGetTaskList;
