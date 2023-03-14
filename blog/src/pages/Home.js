import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get")
      .then((res) => res.json())
      .then(
        (res) => {
          setData(res);
        },
        (error) => console.log(error)
      );
  }, []);

  return (
    <div>
      <>
        <Navbar title="Blog" />
        <div style={{ marginTop: "6rem" }}>
          {data.length>0 ? (
            data.map((item, _id) => (
              <>
                <Link to={`/blog/${item._id}`} style={{color:"black"}}>
                  <Card title={item.title} description={item.description} />
                </Link>
              </>
            ))
          ) : (
            <h3>No item Found!! Please add some items.. </h3>
          )}
        </div>
      </>
    </div>
  );
};

export default Home;
