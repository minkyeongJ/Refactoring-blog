import React, { useState, useEffect } from "react";
import About from "./About";
import Posts from './Posts';
import './css/Main.css';
import { Link } from "react-router-dom";
import styled from "styled-components";


function Main(){
  const [data, setData] = useState([]);
  console.log('public url: ', process.env.PUBLIC_URL);

  useEffect(() => {
    fetch("https://minkyeongj.github.io//Refactoring-blog/data.json", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  const postView = "/postView";

  return (
    <main>
      <div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
        <PostsStyle>
          {data.posts && data.posts.slice(0).reverse().map(post => (
            <Link to={ `${postView}/${post.id}`}> 
              <Posts post={ post } />
            </Link>
          ))}
        </PostsStyle>
        <About />
      </div>
    </main>
  );
};

const PostsStyle = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.4rem;

  @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    .posts {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

export default Main;