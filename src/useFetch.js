import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const jsonData = await data.json();
      setIsPending(false);
      setBlogs(jsonData);
    };
    fetchData(url);
  }, [url]);
  return { blogs, isPending };
};

export default useFetch;
