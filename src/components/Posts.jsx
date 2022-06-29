import styled from 'styled-components';
import Author from './Author';
import Category from './Category';

function Posts({post}){
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
    postCreated: postCreated
  };

  console.log(postTitle);

  // const post
  console.log(postId);
  console.log(postContents);
  // console.log(data.posts.postId);
  return (
    <li>
      <PostStyle href="post-view.html">
        <article>
          <img src={postImg} alt="" />
          <div className="contents-wrap">
            
            <Category postCategory={postCategory}/>

            <h3>{postTitle}</h3>

            <Author props={propsAuthor}/>

            <p className="post-description">
              {postDescription}
            </p>
          </div>
        </article>
      </PostStyle>
    </li>
  );
};

const PostStyle = styled.a`
  display: block;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--white-color);
  font-size: 2rem;

  article > img {
    width: 100%;
  }
  
  .contents-wrap {
    padding: 1.6rem 2.4rem 2.4rem;

    h3, .post-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    h3 {
      height: calc(1.8rem * 1.4 * 2);
      margin: 1rem 0;
      font-size: 1.8rem;
      font-weight: bold;
      -webkit-line-clamp: 2;
      letter-spacing: -0.02em;
    }

    .post-description {
      height: calc(1.4rem * 1.4 * 3);
      margin-top: 1.6rem;
      color: var(--gray-color);
      font-size: 1.4rem;
      -webkit-line-clamp: 3;
      text-indent: 0.5em;
    }
  }

  @media (max-width: 540px) {
    .contents-wrap h3 {
      height: auto;
      -webkit-line-clamp: 1;
    }
    .contents-wrap .post-description {
      height: auto;
      -webkit-line-clamp: 2;
    }
  }
`;



export default Posts;