import { useState, useCallback, useRef } from "react";

export const useRefresh = () => {
  const prevCountRef = useRef(0);
  const countRef = useRef(0);
  const [count, setCount] = useState(countRef.current);
  const refresh = useCallback(() => {
    prevCountRef.current = countRef.current;
    countRef.current += 1;
    setCount(countRef.current);
  }, []);

  return [refresh, count, prevCountRef];
};

export default useRefresh;