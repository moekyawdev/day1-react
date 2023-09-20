import { useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ispum...", author: "mario", id: 1 },
    {
      title: "Welcome Party",
      body: "lorem ispum...",
      author: "johnathan",
      id: 2,
    },
    { title: "Web Dev Tips", body: "lorem ispum...", author: "scooby", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogLists
        blogs={blogs}
        title={"All Blogs"}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
