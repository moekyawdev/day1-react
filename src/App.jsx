import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBlog from "./CreateBlog";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/create" Component={CreateBlog}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
