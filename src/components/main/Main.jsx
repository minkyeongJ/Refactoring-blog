import React, { useState, useEffect } from "react";
import About from "../about/About";
import Posts from "../posts/Posts";
import { Link } from "react-router-dom";
import * as S from "./Style";

function Main() {
  const [data, setData] = useState([]);
  console.log("public url: ", process.env.PUBLIC_URL);

  useEffect(() => {
    fetch("https://minkyeongj.github.io//Refactoring-blog/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const postView = "/postView";

  return (
    <S.MainStyle>
      <div className="max-width">
        <h2 className="a11y-hidden">Post</h2>
        <S.PostsStyle className="posts">
          {data.posts &&
            data.posts
              .slice(0)
              .reverse()
              .map((post) => (
                <Link to={`${postView}/${post.id}`}>
                  <Posts post={post} />
                </Link>
              ))}
        </S.PostsStyle>
        <About />
      </div>
    </S.MainStyle>
  );
}

export default Main;
