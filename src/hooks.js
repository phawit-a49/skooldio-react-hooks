import { useState,useEffect } from "react";


export const useApi = (url) => {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  //api
  useEffect(() => {
    setLoading(true);
    fetch(url).then(resp => resp.json()).then((initialCounter) => {
      setLoading(false);
      setData(data);
    });
  }, []);
  return {loading, data}
};
