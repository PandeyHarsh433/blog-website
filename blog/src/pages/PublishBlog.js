import React from "react";
import AddBlog from "../components/addBlog/AddBlog";
import Navbar from "../components/navbar/Navbar";

const PublishBlog = () => {
  return (
    <div>
      <Navbar title="Blog" />
      <div style={{ marginTop: "10rem",width:"75%"}}>
        <AddBlog />
      </div>
    </div>
  );
};

export default PublishBlog;
