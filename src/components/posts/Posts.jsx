
import Author from "../author/Author";
import Category from "../category/Category";
import * as S from './Style'

function Posts({ post }) {
  const postId = post.id;
  const postImg = post.thumbnail;
  const postTitle = post.title;
  const postCategory = post.category;
  const postProfileImg = post.profileImg;
  const postUserName = post.userName;
  const postCreated = post.created;
  const postContents = post.contents;
  const postDescription = postContents[0].text;
  const propsAuthor = {
    postProfileImg: postProfileImg,
    postUserName: postUserName,
    postCreated: postCreated,
  };

  console.log(postTitle);

  // const post
  console.log(postId);
  console.log(postContents);
  // console.log(data.posts.postId);
  return (
    <li>
      <S.PostStyle href="post-view.html" className="post">
        <article>
          <img src={postImg} alt="" />
          <div className="contents-wrap">
            <Category postCategory={postCategory} />

            <h3>{postTitle}</h3>

            <Author props={propsAuthor} />

            <p className="post-description">{postDescription}</p>
          </div>
        </article>
      </S.PostStyle>
    </li>
  );
}

export default Posts;
