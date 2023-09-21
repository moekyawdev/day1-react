import { useEffect, useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8000/blogs");
      const jsonData = await data.json();
      setIsPending(false);
      setBlogs(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
