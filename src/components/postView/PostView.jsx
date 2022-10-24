import { useEffect, useState } from "react";
import Author from "../author/Author";
import Category from "../category/Category";
import { Link } from "react-router-dom";

function PostView({ postId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://minkyeongj.github.io//Refactoring-blog/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const postDatas = data.posts && data.posts[postId - 1];
  const postTitle = postDatas && postDatas.title;
  const postCategory = postDatas && postDatas.category;
  const postProfileImg = postDatas && postDatas.profileImg;
  const postUserName = postDatas && postDatas.userName;
  const postCreated = postDatas && postDatas.created;
  const postContents = postDatas && postDatas.contents;
  const props = {
    postProfileImg: postProfileImg,
    postUserName: postUserName,
    postCreated: postCreated,
  };
  const $viewContents = document.querySelector(".view-contents");

  return (
    <div className="view">
      <div className="max-width">
        <section className="wrap-box">
          <div className="inner">
            <Author props={props} />
            {postCategory && <Category postCategory={postCategory} />}
            <div className="title-wrap">
              <h2>{postTitle}</h2>
              <button className="btn-like">Like</button>
            </div>
            <hr />
            <div className="view-contents">
              {postContents?.map((data) => {
                const postType = document.createElement(data.type);
                if (data.type === "p") {
                  postType.textContent = data.text;
                } else if (data.type === "img") {
                  postType.src = data.src;
                }
                $viewContents.append(postType);
              })}
            </div>
            <div className="btn-group">
              <Link to={"#"} className="btn-modify">
                <span className="a11y-hidden">modify</span>
              </Link>
              <button type="button" className="btn-delete">
                <span className="a11y-hidden">delete</span>
              </button>
            </div>
            <Link to={"./"} className="btn-back">
              <span className="a11y-hidden">Back</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PostView;
