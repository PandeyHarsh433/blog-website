import { useState } from "react";
import "./AddBlog.css";
import { useNavigate } from "react-router-dom";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addProduct = async () => {
    let result = await fetch("http://localhost:5000/addBlog", {
      method: "post",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct();
    setTitle("");
    setDescription("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h2>Create a New Blog Post</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default BlogForm;
