import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import PublishBlog from "./pages/PublishBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/addBlog" element={<PublishBlog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
