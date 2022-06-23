import React, { useState, useEffect } from "react";
import About from "./About";
import Posts from './Posts';
import './css/Post.css';
import './css/Posts.css';
import './css/About.css';
import './css/Main.css';
import { Link } from "react-router-dom";

function Main(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);
  return (
    <main>
      <div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
				<ul className="posts">
          {data.posts && data.posts.map(post => (
            <Link to="/postVeiw">
              <Posts post={post} />
              {console.log(post)}
            </Link>
          ))}
        </ul>
        <About />
      </div>
    </main>
  );
};

export default Main;