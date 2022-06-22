import React from "react";
import About from "./About";
import Posts from './Posts';
import './css/Post.css';
import './css/Posts.css';
import './css/About.css';
import './css/Main.css';

function Main(){
  return (
    <>
    <main>
      <div className="max-width">
				<h2 className="a11y-hidden">Post</h2>
				<ul className="posts">
          <Posts />
        </ul>
        <About />
      </div>
    </main>
    </>
  );
};

export default Main;