import React, { useEffect, useState } from "react";
import Blog from "../components/blog/Blog";
import Navbar from "../components/navbar/Navbar";
import {useParams, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [blogDetail, setBlogDetail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/get/${id}`)
      .then((res) => res.json())
      .then(
        (res) => setBlogDetail(res),
        (error) => console.log(error)
      );
  }, []);

  const deleteFun = async () => {
    let result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div>
      <Navbar title="Blog" />
      <Blog title={blogDetail.title} description={blogDetail.description} />
      <button
      style={{marginLeft:"43%",marginTop:"5%"}}
        onClick={() => {
          deleteFun();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogPage;
