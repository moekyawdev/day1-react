import BlogLists from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
  const { blogs, isPending } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <div className="loading">Loading...</div>}
      {blogs && <BlogLists blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
