import { useEffect, useState } from "react";
import Author from "../author/Author";
import Category from "../category/Category";
import { Link } from "react-router-dom";
import * as S from "./Style";

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

  return (
    <div className="view">
      <div className="max-width">
        <S.ViewWrap>
          <S.ViewWrapInner>
            <Author props={props} />
            {postCategory && <Category postCategory={postCategory} />}
            <S.TitleWrap>
              <h2>{postTitle}</h2>
              <button className="btn-like">Like</button>
            </S.TitleWrap>
            <hr />
            <S.ViewContents>
              {postContents?.map((data) => {
                if (data.type === "p") {
                  return (<p>{data.text}</p>);
                } else if (data.type === "img") {
                  return (<img src={data.src} />);
                }
                console.log(data);
              })}
            </S.ViewContents>
            <S.WrapButtonGroup>
              <Link to={"#"} className="btn-modify">
                <span className="a11y-hidden">modify</span>
              </Link>
              <button type="button" className="btn-delete">
                <span className="a11y-hidden">delete</span>
              </button>
            </S.WrapButtonGroup>
            <S.ButtonBack to={"../"}>
              <span className="a11y-hidden">Back</span>
            </S.ButtonBack>
          </S.ViewWrapInner>
        </S.ViewWrap>
      </div>
    </div>
  );
}

export default PostView;
